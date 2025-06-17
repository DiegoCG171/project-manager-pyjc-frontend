import { createAsyncThunk } from "@reduxjs/toolkit";
import { changePasswordService } from "../../../services/auth/ChangePassword.service";
import type { ChangePasswordPayload, ChangePasswordResponse } from "../../../interfaces/auth/auth.interface";

export const changepasswordThunk = createAsyncThunk<
    ChangePasswordResponse,
    ChangePasswordPayload,
    { rejectValue: string }
>(
    "/auth/changepassword",
    async (payload, { rejectWithValue }) => {
        try {

            if (payload.newPassword !== payload.confirmPassword) {
                return rejectWithValue("Las contraseñas no coinciden.");
            }

            const response = await changePasswordService(payload);

            return response;
        } catch (error) {
            return rejectWithValue(error as string);
        }
    }
);
