import { useParams } from 'react-router-dom';
import { Typography, Divider, Card, Tag } from 'antd';
import { notifications } from '../components/NotificationData';
import { BackButton } from '../../../shared/components/BackButton';

export const DetailsNotificationPage = () => {
  const { id } = useParams();

  const notification = notifications.find((n) => n.id === Number(id));

  if (!notification) {
    return (
      <div style={{ width: '100%', padding: 24 }}>
        <Typography.Text>Notificación no encontrada</Typography.Text>
      </div>
    );
  }


  return (
    <div style={{ width: '100%', padding: 10, background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <BackButton/>
      </div>

      <Card
        style={{
          maxWidth: '100vh',
          margin: '0 auto',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <Typography.Text strong style={{ fontSize: 16 }}>
            {notification.user}
          </Typography.Text>
          <Tag color={(notification.type)}>{notification.type}</Tag>
        </div>

        <Divider />

        <Typography.Paragraph
          style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}
        >
          {notification.message}
        </Typography.Paragraph>

        <Divider style={{ margin: '16px 0' }} />

        <Typography.Text type="secondary">
          Recibido el: {notification.date}
        </Typography.Text>
      </Card>
    </div>
  );
};
