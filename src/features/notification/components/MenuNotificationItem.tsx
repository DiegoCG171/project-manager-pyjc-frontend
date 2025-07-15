import { Avatar, Typography, Tag, List, Divider } from 'antd';
import { getInitials } from '../../../shared/utils/getInitial';
import styles from '../styles/MainNotification.module.css';

interface MenuNotificationItemProps {
  user: string;
  message: string;
  date: string;
  type: string;
  isRead: boolean;
  avatarUrl?: string;
}

export const MenuNotificationItem: React.FC<MenuNotificationItemProps> = ({
  user,
  message,
  date,
  type,
  isRead,
}) => {
  return (
    <>
      <List.Item className={styles.containerNotification}>
        <Avatar
          shape="circle"
          size={35}
          style={{ backgroundColor: '#d34635', color: '#fefdfd', fontSize: '12px' }}
        >
          {getInitials(user)}
        </Avatar>

        <div style={{ flex: 1, marginLeft: 10 }}>
          <div className={styles.user}>
            <Typography.Text strong>{user}</Typography.Text>
          </div>

          <Typography.Text>{message}</Typography.Text>

          <div style={{ marginTop: 4 }}>
            <Tag color="blue">{type}</Tag>
          </div>

          <Typography.Text type="secondary" style={{ fontSize: 11 }}>
            {date}
          </Typography.Text>
        </div>

        {!isRead && <span className={styles.isRed} />}
      </List.Item>
      <Divider style={{ margin: '0' }} />
    </>
  );
};
