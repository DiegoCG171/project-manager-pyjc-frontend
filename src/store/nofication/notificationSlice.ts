import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
    notify: Notification;
}

interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
  duration?: number;
}

const initialState: NotificationState = {
    notify :{
    id: "",
    type: "success",
    message: "",
    description: "",
    duration: 0
}};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    enqueueNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      state.notify = {
        id: Date.now().toString(),
        ...action.payload
      }
    },
    clearNotification: (state) => {
       state.notify = initialState.notify
    },
  },
});

export const {enqueueNotification, clearNotification} = notificationSlice.actions;