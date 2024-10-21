import { configureStore } from "@reduxjs/toolkit";
import characterSlice  from "../features/character/CharacterSlice";
import  episodeSlice  from "../features/episode/EpisodeSlice";

export const store = configureStore({
  reducer: {
    episode: episodeSlice,
    character: characterSlice,
  },
});
