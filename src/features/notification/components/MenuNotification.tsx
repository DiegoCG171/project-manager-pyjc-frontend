import React, { useState } from 'react';
import { Badge, Popover, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { MenuMainNotification } from './MenuMainNotification';
import styles from '../../../shared/styles/MainLayout.module.css';

interface Props {
  notificationCount: number;
  collapsed: boolean;
}

export const NotificactionButton: React.FC<Props> = ({ notificationCount, collapsed }) => {
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
        {!collapsed ? (
          <Badge count={notificationCount} size="small" overflowCount={99}>
            <BellOutlined style={{ fontSize: 18 }} />
            <Typography.Text style={{ marginLeft: 8 }}>
              Notificaciones
            </Typography.Text>
          </Badge>
        ) :
          (
            <Badge count={notificationCount} size="small" overflowCount={99}>
              <BellOutlined style={{ fontSize: 18 }} />
            </Badge>
          )}
      </div>
    </Popover>
  );
};
