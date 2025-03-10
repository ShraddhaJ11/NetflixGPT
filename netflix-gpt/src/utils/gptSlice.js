import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
        state.showGPTSearch = !state.showGPTSearch
    },
  },
});

export default gptSlice.reducer;

export const { toggleGPTSearchView } = gptSlice.actions;
