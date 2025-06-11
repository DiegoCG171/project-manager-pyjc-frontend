import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.state';
import { loginThunk } from './thunks/auth.thunk';

export const cambiarContraseña = createAsyncThunk(
  'auth/cambiarContraseña',
  async (nuevaContraseña: string, thunkAPI) => {
    try {
      console.log('Contraseña cambiada:', nuevaContraseña);
      return true;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue('Error al cambiar la contraseña.');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
  },
  extraReducers: (build) => {
      build.addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(cambiarContraseña.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cambiarContraseña.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(cambiarContraseña.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
})
