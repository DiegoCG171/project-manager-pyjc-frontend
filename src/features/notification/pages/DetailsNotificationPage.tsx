import { useParams } from 'react-router-dom';
import { Avatar, Typography, Divider, Card, Tag } from 'antd';
//import { notifications } from '../components/NotificationData';
import { BackButton } from '../../../shared/components/BackButton';
import { getInitials } from '../../../shared/utils/getInitial';
import styles from '../styles/SideNotification.module.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';

export const DetailsNotificationPage = () => {
  const { id } = useParams();


  const notifications = useSelector((state: RootState) => state.notificationPanel.notifications);
  const notification = notifications.find((n) => n.id === Number(id));

  if (!notification) {
    return (
      <div style={{ width: '100%', padding: 24 }}>
        <Typography.Text>Notificación no encontrada</Typography.Text>
      </div>
    );
  }


  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton />
      </div>

      <Card className={styles.card}>
        <div>
          <Avatar
            shape="circle"
            size={35}
            style={{ backgroundColor: '#d34635', color: '#fefdfd', fontSize: '12px' }}
          >
            {getInitials(notification.user)}
          </Avatar>
          <Typography.Text strong style={{ fontSize: 16, padding: '0px 15px' }}>
            {notification.user}
          </Typography.Text>

          <Tag color={'blue'}>{notification.type}</Tag>
        </div>

        <Divider />

        <Typography.Paragraph className={styles.paragraph}>
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
