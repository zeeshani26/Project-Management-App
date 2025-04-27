import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialState {
  SidebarClosed: boolean;
  DarkMode: boolean;
}

const initialState = {
  SidebarClosed: false,
  DarkMode: false,
};

// for dark mode and other global settings
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSidebarClosed: (state, action: PayloadAction<boolean>) => {
      state.SidebarClosed = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.DarkMode = action.payload;
    },
  },
});

export const { setSidebarClosed, setDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
