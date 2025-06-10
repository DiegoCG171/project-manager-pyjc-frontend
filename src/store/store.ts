import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/recovery/authSlice";
import { uiSlice } from "./ui/uiSlice";
import { recoveryPasswordSlice } from "./auth/recovery/recoveryPasswordSlice";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        recovery: recoveryPasswordSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;