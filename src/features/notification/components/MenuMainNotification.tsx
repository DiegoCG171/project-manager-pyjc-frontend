import { useState, useEffect } from 'react';
import { Typography, Button, Divider, Tabs, Badge } from 'antd';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuNotificationItem } from './MenuNotificationItem';
import styles from '../styles/MainNotification.module.css';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import {
  setNotifications,
  markAllAsRead,
  archiveAll,
} from '../../../store/notifications/notificationPanelSlice';

import { notifications as mockNotifications } from '../data/NotificationData';

interface Props {
  onClose: () => void;
}

export const MenuMainNotification: React.FC<Props> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('1');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state: RootState) => state.notificationPanel.notifications
  );

  useEffect(() => {
    if (notifications.length === 0) {
      dispatch(setNotifications(mockNotifications));
    }
  }, [dispatch, notifications.length]);

  const newNotification = notifications.filter((n) => !n.isRead).length;

  const filteredNotifications = notifications.filter((noti) => {
    if (activeTab === '2') return !noti.isRead;
    if (activeTab === '3') return noti.isRead;
    return true;
  });

  const handleNotificationClick = (id: number) => {
    navigate(`/notifications/${id}`);
    onClose();
  };

  return (
    <div style={{ width: 380, padding: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Text strong style={{ fontSize: 16 }}>
          Notificaciones
        </Typography.Text>
        <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
      </div>

      <Divider style={{ margin: '8px 0' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          defaultActiveKey="1"
          size="small"
          tabBarGutter={14}
          style={{ flex: 1 }}
          items={[
            { key: '1', label: <Typography>Todas</Typography> },
            {
              key: '2',
              label: (
                <Badge count={newNotification} size="small" style={{ marginTop: -3 }}>
                  Nuevas
                </Badge>
              ),
            },
            { key: '3', label: <Typography>Leídos</Typography> },
          ]}
        />
        <SettingOutlined style={{ fontSize: 18, marginLeft: 10, cursor: 'pointer' }} />
      </div>

      {filteredNotifications.length > 0 ? (
        <div className={styles.listNotification}>
          {filteredNotifications.map((noti) => (
            <div
              key={noti.id}
              className={styles.listNotificationItem}
              style={{ cursor: 'pointer' }}
              onClick={() => handleNotificationClick(noti.id)}
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
          ))}
        </div>
      ) : (
        <div className={styles.noNotification}>
          <Typography.Text>No tienes notificaciones</Typography.Text>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <Button type="text" className={styles.button} onClick={() => dispatch(archiveAll())}>
          <Typography.Text strong>Archivar todos</Typography.Text>
        </Button>
        <Button type="text" className={styles.button} onClick={() => dispatch(markAllAsRead())}>
          <Typography.Text strong>Marcar como leídos</Typography.Text>
        </Button>
      </div>
    </div>
  );
};
