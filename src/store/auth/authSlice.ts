import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.state';
import { loginThunk } from './thunks/auth.thunk';


export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.user = {
        _id: "",
        email: "",
        full_name: "",
        rol: [],
        phone: "",
      };
      state.token = "";
    },
  },
  extraReducers: (build) => {
      build.addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
