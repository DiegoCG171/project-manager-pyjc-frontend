import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "./ui.state";
import { changepasswordThunk, loginThunk } from "../auth/thunks/auth.thunk";
import { forgotPasswordThunk } from "../recovery/thunks/forgotPassword.thunk";
import { addThunkLoading } from "./utils/addThunkLoading";
import { validateCodeThunk } from "../recovery/thunks/validateCode.thunk";

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {},
  extraReducers: (build) => {
    addThunkLoading(build, loginThunk, (state) => state.authUI.status)
    addThunkLoading(build, forgotPasswordThunk, (state) => state.authUI.status)
    addThunkLoading(build, validateCodeThunk, (state) => state.authUI.status)
    addThunkLoading(build, changepasswordThunk, (state) => state.authUI.status)
  },
});
