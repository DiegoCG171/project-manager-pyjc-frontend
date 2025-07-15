import { Menu, Avatar, Typography } from 'antd';
import { LogoutOutlined, ShareAltOutlined, HistoryOutlined, TrophyOutlined } from '@ant-design/icons';
import styles from '../styles/MainLayout.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { getInitials } from '../../../shared/utils/getInitial';

import { useDispatch } from 'react-redux';
import { logout } from '../../../store/auth/authSlice';

export const MenuMainLayout = ({ collapsed }: { collapsed: boolean }) => {

  const { full_name, email } = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu>
      <Menu.Item key="profile" disabled style={{ cursor: 'default', background: '#f6f6f6' }}>
        <div >
          {!collapsed && (
            <div className={styles.profileContainerMenu}>
              <Avatar
                shape="square"
                size={35}
                style={{ backgroundColor: '#d34635', marginRight: 12 }}
              >
                {getInitials(full_name)}
              </Avatar>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography.Text
                  strong
                  style={{ display: 'block', lineHeight: '16px' }}
                >
                  {full_name || 'Usuario'}
                </Typography.Text>
                <Typography.Text
                  type="secondary"
                  style={{ display: 'block', fontSize: 12, marginTop: '4px', lineHeight: '14px' }}
                >
                  {email || 'correo@correo.com'}
                </Typography.Text>
              </div>
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
