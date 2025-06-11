import { createAsyncThunk } from "@reduxjs/toolkit";

interface ForgotPasswordCredential {
    email: string;
}

export const passwordThunk = createAsyncThunk(
    "/auth/forgot-password",
    async (loginCredential: ForgotPasswordCredential) => {
        
        return {
            email: loginCredential.email,
        }
    }
)
