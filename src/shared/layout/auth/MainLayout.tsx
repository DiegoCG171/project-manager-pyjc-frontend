import { useState } from 'react';
import { Layout, Menu, Avatar, Typography, Dropdown } from 'antd';
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

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('1');

  const { full_name } = useSelector((state: RootState) => state.auth.user);

  const renderContent = () => {
    switch (activeMenu) {
      case '1':
        return <h2>Dashboard P&JC</h2>;
      case '2':
        return <h2>Sección 2 clientes</h2>;
      case '3':
        return <h2>Sección 3 deals</h2>;
      case '4':
        return <h2>Sección 4 inbox</h2>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} theme="light">
        <div className={styles.siderFlex}>

          {/* Logo y Nombre */}
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
            selectedKeys={[activeMenu]}
            style={{ marginTop: 8 }}
            onClick={(item) => setActiveMenu(item.key)}
            items={mainRoutes
              .filter(route => route.viewMenu)
              .map((route, index) => ({
                key: `${index + 1}`,
                icon: route.icon,
                label: route.label
              }))
            }
          />

          <div style={{ flex: 1 }} />

          {/* Perfil */}
          <Dropdown overlay={<MenuMainLayout collapsed={collapsed} />} placement="topLeft" arrow trigger={['click']}>
            <div className={styles.profileContainer}>
              <Avatar shape="circle" size={48} style={{backgroundColor: '#d34635', color: '#fefdfd' }}>
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
          {renderContent()}
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  );
};
