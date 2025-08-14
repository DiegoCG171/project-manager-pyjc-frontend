import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Areas } from "./interfaces/areas.interfaces";

interface AreasState {
  data: Areas[];
}

const initialState: AreasState = {
  data: [],
};

export const areasSlice = createSlice({
  name: "areas",
  initialState,
  reducers: {
    setAreas: (state, action: PayloadAction<Areas[]>) => {
      state.data = action.payload;
    },
    addArea: (state, action: PayloadAction<Areas>) => {
      state.data.push(action.payload);
    },
  },
});

export const { setAreas, addArea } = areasSlice.actions;
export default areasSlice.reducer;
