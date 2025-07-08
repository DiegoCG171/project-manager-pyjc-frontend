import { Typography, Button, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { MenuNotificationItem } from './MenuNotificationItem';

interface Notification {
  id: number;
  user: string;
  message: string;
  date: string;
  type: string;
  isRead: boolean;
}

interface Props {
  onClose: () => void;
}

export const MenuMainNotification: React.FC<Props> = ({ onClose }) => {
  const notifications: Notification[] = [
    {
      id: 1,
      user: 'Erick Trejo',
      message: 'Nueva tarea asignada',
      date: '06 Jul 2025 12:45',
      type: 'UI Design',
      isRead: false,
    },
    {
      id: 2,
      user: 'Diego Ceron',
      message: 'Comentó en tu proyecto',
      date: '05 Jul 2025 18:10',
      type: 'Dashboard',
      isRead: true,
    },
    {
      id: 3,
      user: 'Brayan Eduardo',
      message: 'Agregó una nueva actividad',
      date: '07 Jul 2025 09:25',
      type: 'Dashboard',
      isRead: false,
    }
  ];

  return (
    <div style={{ width: 400, padding: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Text strong style={{ fontSize: 16 }}>
          Notificaciones
        </Typography.Text>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
        />
      </div>

      <Divider style={{ margin: '8px 0' }} />

      <div
        style={{
          maxHeight: '400px',
          overflowY: 'auto',
          paddingRight: 4,
        }}
      >
        {notifications.map((noti) => (
          <MenuNotificationItem
            key={noti.id}
            user={noti.user}
            message={noti.message}
            date={noti.date}
            type={noti.type}
            isRead={noti.isRead}
          />
        ))}
      </div>
    </div>
  );
};
