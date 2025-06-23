import { useState } from 'react';
import { Layout, Menu, Avatar, Typography, Dropdown } from 'antd';
//import { MailOutlined, UserOutlined, DollarOutlined, HomeOutlined, NotificationOutlined } from '@ant-design/icons';
import LogoSVG from "../../../assets/logo.svg";
import LogoSVGTitle from "../../../assets/logo_title.svg";
import styles from "../../styles/MainLayout.module.css";
import { MenuMainLayout } from "../../components/MenuMainLayout";
import { mainRoutes } from "../../../router/routes/mainRoutes";

const { Sider, Content, Footer } = Layout;
const { Text } = Typography;

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('1');

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
      case '5':
        return <h2>Sección 5 notificaciones</h2>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} theme="light">
        <div className={styles.siderFlex}>


          {/*Logo y Nombre*/}
          <div onClick={() => setCollapsed(!collapsed)} className={styles.logoContainer}>

            {collapsed && (
              <Avatar shape="square" size={52} src={LogoSVG} />
            )}

            {!collapsed && (
              <Avatar shape='square' style={{ width: 120, height: 50, }} src={LogoSVGTitle} />
            )}
          </div>

          {/*Espacio superior de "MENU"*/}
          <div style={{ height: 16 }} />

          <Text className={styles.menuTitle}>MENU</Text>

          <Menu
            mode="inline"
            selectedKeys={[activeMenu]}
            style={{ marginTop: 8 }}
            onClick={(item) => setActiveMenu(item.key)}
            items={
              mainRoutes
                .filter(route => route.viewMenu)
                .map((route, index) => ({
                  key: `${index + 1}`,
                  icon: route.icon,
                  label: route.label
                }))
            }
          />

          {/*Espacio entre el final de notis y el perfil*/}
          <div style={{ flex: 1 }} />

          {/*Perfil*/}
          <Dropdown overlay={<MenuMainLayout collapsed={collapsed} />} trigger={['click']}>
            <div className={styles.profileContainer}>
              <Avatar shape="square" size={48} src={"https://i.pravatar.cc/150?img=3"} />
              {!collapsed && (
                <div>
                  <Typography.Text strong className={styles.userName}>
                    Aleks Andrew
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
