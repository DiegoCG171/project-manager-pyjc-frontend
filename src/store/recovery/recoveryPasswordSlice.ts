import { createSlice } from "@reduxjs/toolkit";
import { recoveryInitialState } from "./recoveryPassword.state"
import { forgotPasswordThunk } from "./thunks/forgotPassword.thunk";
import { validateCodeThunk } from "./thunks/validateCode.thunk";

export const recoveryPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState : recoveryInitialState,
  reducers: {},
  extraReducers: (builder) => {
  builder
    .addCase(forgotPasswordThunk.fulfilled, (state, action) => {
      state.email = action.payload;
    })
    .addCase(validateCodeThunk.fulfilled, (state, action) => {
      state.code = action.payload;
    })
}

});

export default recoveryPasswordSlice.reducer;
