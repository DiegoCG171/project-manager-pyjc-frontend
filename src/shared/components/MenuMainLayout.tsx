import { Menu, Avatar, Typography } from 'antd';
import { LogoutOutlined, ShareAltOutlined, HistoryOutlined, TrophyOutlined } from '@ant-design/icons';
import styles from '../styles/MainLayout.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { getInitials } from '../utils/getInitial';

import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';

export const MenuMainLayout = ({ collapsed }: { collapsed: boolean }) => {
  
  const { full_name, email } = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu>
      <Menu.Item key="profile" disabled style={{ cursor: 'default', background: '#f6f6f6' }}>
        <div className={styles.profileContainerMenu}>
          <Avatar
            shape="square"
            size={40}
            style={{ border: '1px solid #ccc', backgroundColor: '#d34635', color: '#fefdfd' }}
            >
              {getInitials(full_name)}
          </Avatar>
          {!collapsed && (
            <div>
              <Typography.Text strong className={styles.userName}>
                {full_name || 'Usuario'}
              </Typography.Text>
              <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                {email || 'correo@correo.com'}
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

      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Log out
      </Menu.Item>
    </Menu>
  );
};
