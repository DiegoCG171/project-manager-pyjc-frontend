import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.state';
import { loginThunk } from './thunks/auth.thunk';


export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
  },
  extraReducers: (build) => {
      build.addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
})
