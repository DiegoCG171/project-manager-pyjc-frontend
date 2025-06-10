import { createSlice } from "@reduxjs/toolkit";
import { passwordThunk } from "./thunks/forgotPassword.thunk";


interface ForgotPasswordState {
  email: string | null;
}

const initialState: ForgotPasswordState = {
  email: null,
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(passwordThunk.fulfilled, (state, action) => {
      state.email = action.payload.email;
    });
  },
});

export default forgotPasswordSlice.reducer;
