import { createSlice } from "@reduxjs/toolkit";
import { passwordThunk } from "./thunks/forgotPassword.thunk";
import { sendCodeThunk } from "./thunks/sendcode.thunk";
import { recoveryInitialState } from "./recoveryPassword.state"

export const recoveryPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState : recoveryInitialState,
  reducers: {},
  extraReducers: (builder) => {
  builder
    .addCase(passwordThunk.fulfilled, (state, action) => {
      state.email = action.payload.email;
    })
    .addCase(sendCodeThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(sendCodeThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.step = 'codeSent';
      state.code = action.payload.code;
    })
    .addCase(sendCodeThunk.rejected, (state) => {
      state.loading = false;
    });
}

});

export default recoveryPasswordSlice.reducer;
