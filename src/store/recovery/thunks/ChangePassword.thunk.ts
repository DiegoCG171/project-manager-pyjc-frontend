import { createAsyncThunk } from "@reduxjs/toolkit";

export const changepasswordThunk = createAsyncThunk(
  "auth/changepassword",
  async (newpassword: string, { rejectWithValue }) => {
    try {
      console.log("Nueva contraseña:", newpassword);
      return true;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Error al cambiar la contraseña.");
    }
  }
);