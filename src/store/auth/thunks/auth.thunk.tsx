import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../../services/auth/login.service";
import { enqueueNotification } from "../../nofication/notificationSlice";
import type { LoginCredentials } from "../../../interfaces/auth/auth.interface";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (loginCredential: LoginCredentials, { rejectWithValue, dispatch }) => {
    try {
      const user = await loginService(loginCredential);
      localStorage.setItem("token", user.token);
      return user;
    } catch (error) {
      dispatch(
        enqueueNotification({
          type: "error",
          message: error as string,
          description: "Credenciales incorrectas.",
        })
      );
      return rejectWithValue("Error al cambiar la contraseña.");
    }
  }
);

