import { Character, CharactersEmptyState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

interface Action {
  type: string;
  payload: Character[];
}

export const userSlice = createSlice({
  name: "characters",
  initialState: CharactersEmptyState,
  reducers: {
    createCharacters: (state, action: Action) => {
      return action.payload;
    },
    modifyCharacters: (state, action: Action) => {
      const formattedData = [...state, ...action.payload];
      return formattedData;
    },
    resetCharacters: () => {
      return CharactersEmptyState;
    },
  },
});

export const { createCharacters, modifyCharacters, resetCharacters } =
  userSlice.actions;

export default userSlice.reducer;
