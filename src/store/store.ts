import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { uiSlice } from "./ui/uiSlice";
import { recoveryPasswordSlice } from "./recovery/recoveryPasswordSlice";
import { notificationSlice } from "./nofication/notificationSlice";
import notificationPanelSlice from "./notifications/notificationPanelSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        notification: notificationSlice.reducer,
        recovery: recoveryPasswordSlice.reducer,
        notificationPanel: notificationPanelSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;