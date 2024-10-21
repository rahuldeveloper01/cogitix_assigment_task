import { createSlice } from "@reduxjs/toolkit";
import { getCharacterList, getCharacterListById } from "./GetCharacterSlice";

const initialState = {
  characterList: [],
  characterListGetById: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    resetCharacterList: (state, action) => {
      console.log(state,action.payload,"resetpaylod");
      
      state.characterList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacterList.fulfilled, (state, action) => {
      state.characterList = action?.payload;
    });
    builder.addCase(getCharacterListById.fulfilled, (state, action) => {
      state.characterListGetById = action?.payload;
    });
  },
});
export const { resetCharacterList } = characterSlice.actions;

export default characterSlice.reducer;
