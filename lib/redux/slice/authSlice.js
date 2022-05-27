import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [],
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = { ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.startsWith("auth") && type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.startsWith("auth") && type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
