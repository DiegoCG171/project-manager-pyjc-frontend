import { createAsyncThunk } from "@reduxjs/toolkit";
import { validateCodeService } from "../../../services/auth/validateCode.service";

export const validateCodeThunk = createAsyncThunk(
  "/auth/validate-code",
  async (code: string, { rejectWithValue }) => {
    try {
      await validateCodeService({code: code});
      return code;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
