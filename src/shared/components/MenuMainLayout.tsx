import { Menu, Avatar, Typography } from 'antd';
import { LogoutOutlined, ShareAltOutlined, HistoryOutlined, TrophyOutlined } from '@ant-design/icons';
import styles from '../styles/MainLayout.module.css';

export const MenuMainLayout = ({ collapsed }: { collapsed: boolean }) => (
  <Menu>
    <Menu.Item key="profile" disabled style={{ cursor: 'default', background: '#f6f6f6' }}>
      <div className={styles.profileContainerMenu}>
        <Avatar
          shape="square"
          size={40}
          src={"https://i.pravatar.cc/150?img=3"}
          style={{ border: '1px solid #ccc' }}
        />
        {!collapsed && (
          <div>
            <Typography.Text strong className={styles.userName}>
              Aleks Andrew
            </Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              aleks.garcia.009@gmail.com
            </Typography.Text>
          </div>
        )}
      </div>
    </Menu.Item>
    <Menu.Item key="1" icon={<ShareAltOutlined />}>
      Integrations
    </Menu.Item>
    <Menu.Item key="2" icon={<HistoryOutlined />}>
      History
    </Menu.Item>
    <Menu.Item key="3" icon={<TrophyOutlined />}>
      Upgrade to Pro
    </Menu.Item>

    <Menu.Divider />

    <Menu.Item key="logout" icon={<LogoutOutlined />}>
      Log out
    </Menu.Item>
  </Menu>
);
