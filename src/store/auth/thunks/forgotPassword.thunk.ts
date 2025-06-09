import { createAsyncThunk } from "@reduxjs/toolkit";

interface ForgotPasswordCredential {
    email: string;
}

export const passwordThunk = createAsyncThunk(
    "/auth/forgot-password",
    async (loginCredential: ForgotPasswordCredential) => {
        
        return {
            id: '1',
            email: loginCredential.email,
        }
    }
)