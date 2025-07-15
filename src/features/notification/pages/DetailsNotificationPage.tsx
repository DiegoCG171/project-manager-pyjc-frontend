import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Divider, Card, Button, Tag } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { notifications } from '../components/NotificationData';

export const DetailsNotificationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const notification = notifications.find((n) => n.id === Number(id));

  if (!notification) {
    return (
      <div style={{ width: '100%', padding: 24 }}>
        <Typography.Text>Notificación no encontrada</Typography.Text>
      </div>
    );
  }


  return (
    <div style={{ width: '100%', padding: 24, background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={() => navigate(-1)}
          //onClick={() => navigate('/dashboard')}
          style={{ marginRight: 12 }}
        >
          Regresar
        </Button>
      </div>

      <Card
        style={{
          maxWidth: 700,
          margin: '0 auto',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
        bodyStyle={{ padding: 24 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <Typography.Text strong style={{ fontSize: 16 }}>
            {notification.user}
          </Typography.Text>
          <Tag color={(notification.type)}>{notification.type}</Tag>
        </div>

        <Divider />

        <Typography.Paragraph
          style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 20 }}
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
