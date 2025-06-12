import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "./ui.state";
import { changepasswordThunk, loginThunk } from "../auth/thunks/auth.thunk";

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
      .addCase(changepasswordThunk.pending, (state) => {
        state.authUI.status.loading = true;
      })
      .addCase(changepasswordThunk.fulfilled, (state) => {
        state.authUI.status.loading = true;
      })
      .addCase(changepasswordThunk.rejected, (state) => {
        state.authUI.status.loading = false;
      })
  },
});
