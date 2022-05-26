import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
