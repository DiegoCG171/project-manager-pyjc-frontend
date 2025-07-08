import React, { useState } from 'react';
import { Badge, Popover, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { MenuMainNotification } from './MenuMainNotification';
import styles from '../styles/MainLayout.module.css';

interface Props {
  notificationCount: number;
}

export const NotificactionButton: React.FC<Props> = ({ notificationCount }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Popover
      content={<MenuMainNotification onClose={handleClose} />}
      placement="right"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className={styles.notifications}>
        <BellOutlined />
        <Badge count={notificationCount} size="small" overflowCount={99}>
          <Typography.Text>
            Notificaciones
          </Typography.Text>
        </Badge>
      </div>
    </Popover>
  );
};
