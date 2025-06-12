import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "./ui.state";
import { cambiarContraseña } from "../auth/authSlice";
import { loginThunk } from "../auth/thunks/auth.thunk";

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(loginThunk.pending, (state) => {
        state.authUI.status.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.authUI.status.loading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.authUI.status.loading = false;
      })
      .addCase(cambiarContraseña.pending, (state) => {
        state.authUI.status.loading = true;
      })
      .addCase(cambiarContraseña.fulfilled, (state) => {
        state.authUI.status.loading = false;
      })
      .addCase(cambiarContraseña.rejected, (state) => {
        state.authUI.status.loading = false;
      });
  },
});
