import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./auth.state";


export const authSlice = createSlice({
   name: 'auth',
   initialState: authInitialState,
   reducers: {}
})