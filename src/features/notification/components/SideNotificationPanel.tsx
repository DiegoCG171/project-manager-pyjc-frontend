import { useState } from 'react';
import { Typography, Button, Divider, Tabs, Badge } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { MenuNotificationItem } from './MenuNotificationItem';
import { useNavigate, useLocation } from 'react-router-dom';
import { notifications } from './NotificationData';

export const SideNotificationPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');
  const navigate = useNavigate();
  const location = useLocation();

  const newNotification = notifications.filter((n) => !n.isRead).length;

  const filteredNotifications = notifications.filter((noti) => {
    if (activeTab === '2') return !noti.isRead;
    if (activeTab === '3') return noti.isRead;
    return true;
  });

  const handleNotificationClick = (id: number) => {
    if (location.pathname !== `/notifications/${id}`) {
      navigate(`/notifications/${id}`);
    }
  };

  return (
    <div style={{
  width: '100%',
  height: '100vh',
  padding: '16px',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
}}>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  }}>
    <Typography.Text style={{ fontSize: 18, fontWeight: 600, color: '#1f1f1f' }}>
      Notificaciones
    </Typography.Text>
    <SettingOutlined style={{ fontSize: 20, color: '#595959', cursor: 'pointer' }} />
  </div>

  <Divider style={{ margin: '8px 0' }} />

  <Tabs
    activeKey={activeTab}
    onChange={(key) => setActiveTab(key)}
    size="small"
    tabBarGutter={10}
    items={[
      { key: '1', label: <Typography style={{ fontSize: 14 }}>Todas</Typography> },
      { key: '2', label: <Badge count={newNotification} size="small" style={{ marginTop: -3 }}>Nuevas</Badge> },
      { key: '3', label: <Typography style={{ fontSize: 14 }}>Leídos</Typography> },
    ]}
    tabBarStyle={{ marginBottom: 12 }}
  />

  <div
    style={{
      flex: 1,
      overflowY: 'auto',
      paddingRight: 4,
    }}
  >
    {filteredNotifications.length > 0 ? (
      filteredNotifications.map((noti) => (
        <div
          key={noti.id}
          style={{
            cursor: 'pointer',
            borderRadius: 8,
            padding: '6px 4px',
            transition: 'background-color 0.2s',
          }}
          onClick={() => handleNotificationClick(noti.id)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <MenuNotificationItem
            user={noti.user}
            message={
              noti.message.length > 70
                ? `${noti.message.substring(0, 70)}...`
                : noti.message
            }
            date={noti.date}
            type={noti.type}
            isRead={noti.isRead}
          />
        </div>
      ))
    ) : (
      <div style={{ padding: '8px 0' }}>
        <Typography.Text type="secondary">No tienes notificaciones</Typography.Text>
      </div>
    )}
  </div>

  <Divider style={{ margin: '12px 0' }} />

  <div style={{ display: 'flex', gap: 8 }}>
    <Button
      type="default"
      size="small"
      style={{
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#fafafa',
        borderColor: '#d9d9d9',
      }}
    >
      Archivar todos
    </Button>
    <Button
      type="default"
      size="small"
      style={{
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#fafafa',
        borderColor: '#d9d9d9',
      }}
    >
      Marcar como leídos
    </Button>
  </div>
</div>
  );
};
