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
=
export const cambiarContraseña = createAsyncThunk(
  "auth/cambiarContraseña",
  async (nuevaContraseña: string, { rejectWithValue }) => {
    try {
      console.log("Nueva contraseña:", nuevaContraseña);
      return true;
    } catch (error: any) {
      return rejectWithValue("Error al cambiar la contraseña.");
    }
  }
);