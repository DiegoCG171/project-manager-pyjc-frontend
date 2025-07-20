import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Notification, NotificationState } from '../notifications/interfaces/notification.interface'

const initialState: NotificationState = {
  notifications: [],
  selectedTab: 'all',
};

const notificationPanelSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.notifications = action.payload;
    },
    markAllAsRead(state) {
      state.notifications = state.notifications.map((n) => ({ ...n, isRead: true }));
    },
    archiveAll(state) {
      state.notifications = []; 
    },
  },
});

export const { setNotifications, markAllAsRead, archiveAll } = notificationPanelSlice.actions;
export default notificationPanelSlice.reducer;