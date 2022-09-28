import { User, UserEmptyState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

interface Action {
  type: string;
  payload: User;
}

export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action: Action) => {
      return action.payload;
    },
    modifyUser: (state, action: Action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      return UserEmptyState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
