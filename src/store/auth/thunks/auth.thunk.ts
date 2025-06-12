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
  async (newpassword: string, { rejectWithValue }) => {
    try {
      console.log("Nueva contraseña:", newpassword);
      return true;
    } catch (error) {
      console.log(error)
      return rejectWithValue("Error al cambiar la contraseña.");
    }
    }
);