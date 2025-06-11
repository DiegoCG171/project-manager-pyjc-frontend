import { createAsyncThunk } from "@reduxjs/toolkit";

interface SendCodeCredential {
  code: string;
}

export const sendCodeThunk = createAsyncThunk(
  "/auth/send-code",
  async (payload: SendCodeCredential) => {

    return {
      code: payload.code,
      verified: true,
    };
  }
);
