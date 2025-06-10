import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginCredential {
  email: string;
  password: string;
}

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (loginCredential: LoginCredential) => {

    return {
      id: '',
      full_name: 'Diego CG',
      email: loginCredential.email,
      phone: '55000000',
      role: ['user']
    }
  }
);

export const changepasswordThunk = createAsyncThunk(
  "auth/changepassword",
  async (newpassword: string, { }) => {
    console.log("Nueva contraseña:", newpassword);
    }
);