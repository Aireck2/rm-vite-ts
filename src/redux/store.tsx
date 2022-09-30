import { Character } from "@/models";
import { configureStore } from "@reduxjs/toolkit";

import { charactersReducer } from "./slices";

export interface AppStore {
  characters: Character[];
}

export default configureStore<AppStore>({
  reducer: { characters: charactersReducer },
});
