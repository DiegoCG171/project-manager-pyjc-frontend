import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "./ui.state";

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {},
});
