import { createSlice } from "@reduxjs/toolkit";
import { getEpisodeList } from "./GetEpisodeSlice";

const initialState = {
  episodeList: [],
};

export const episodeSlice = createSlice({
  name: "episode",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getEpisodeList.fulfilled, (state, action) => {
      state.episodeList = action?.payload;
    });
  },
});

export default episodeSlice.reducer;
