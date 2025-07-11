import { useState } from 'react';
import type { JSX } from 'react';
import { Layout, Menu, Avatar, Typography, Dropdown } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoSVG from "../../../assets/logo.svg";
import LogoSVGTitle from "../../../assets/logo_title.svg";
import styles from "../../styles/MainLayout.module.css";
import { MenuMainLayout } from "../../components/MenuMainLayout";
import { mainRoutes } from "../../../router/routes/mainRoutes";
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { getInitials } from '../../utils/getInitial';

const { Sider, Content, Footer } = Layout;
const { Text } = Typography;

interface Props {
  children?: JSX.Element;
}

export const MainLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { full_name } = useSelector((state: RootState) => state.auth.user);

  const renderMenuItems = () =>
    mainRoutes
      .filter(route => route.viewMenu)
      .map((route) => {
        if (route.children && route.children.length > 0) {
          return {
            key: route.path,
            icon: route.icon,
            label: route.label,
            children: route.children.map((child) => ({
              key: `${route.path}/${child.path}`,
              label: child.label
            }))
          };
        }
        return {
          key: route.path,
          icon: route.icon,
          label: route.label
        };
      });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} theme="light">
        <div className={styles.siderFlex}>
          <div onClick={() => setCollapsed(!collapsed)} className={styles.logoContainer}>
            {collapsed ? (
              <Avatar shape="square" size={52} src={LogoSVG} />
            ) : (
              <Avatar shape='square' style={{ width: 120, height: 50 }} src={LogoSVGTitle} />
            )}
          </div>

          <div style={{ height: 16 }} />
          <Text className={styles.menuTitle}>MENU</Text>

          <Menu
            mode="inline"
            selectedKeys={[location.pathname.replace(/^\//, '')]}
            style={{ marginTop: 8 }}
            onClick={(item) => {
              navigate(`/${item.key}`);
            }}
            items={renderMenuItems()}
          />

          <div style={{ flex: 1 }} />

          <Dropdown overlay={<MenuMainLayout collapsed={collapsed} />} placement="topRight" arrow trigger={['click']}>
            <div className={styles.profileContainer}>
              <Avatar shape="circle" size={48} style={{ backgroundColor: '#d34635', color: '#fefdfd' }}>
                {getInitials(full_name)}
              </Avatar>
              {!collapsed && (
                <div>
                  <Typography.Text strong className={styles.userName}>
                    {full_name || 'User'}
                  </Typography.Text>
                </div>
              )}
            </div>
          </Dropdown>
        </div>
      </Sider>

      <Layout>
        <Content className={styles.content}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  );
};
