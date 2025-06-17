import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordService } from "../../../services/auth/forgotPassword.service";

export const forgotPasswordThunk = createAsyncThunk(
  "/auth/forgot-password",
  async (email: string, { rejectWithValue }) => {
    try {
      await forgotPasswordService(email);
      return email;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
