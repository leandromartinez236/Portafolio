import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false
}
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.darkMode = !state.darkMode
    },
  }
})

export const { setDarkTheme } = themeSlice.actions
export const selectMode = (state) => state.theme.darkMode
export default themeSlice.reducer