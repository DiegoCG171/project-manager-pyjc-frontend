import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginCredential {
    email: string;
    password: string;
}

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (loginCredential: LoginCredential) => {
        
        return {
            id: '1',
            full_name: 'Diego CG',
            email: loginCredential.email,
            phone: '55000000',
            role: ['user']
        }
    }
)