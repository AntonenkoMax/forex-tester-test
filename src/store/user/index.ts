import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { getLanguages, getUser, getUserRepositories } from "./actions";

const initialState: UserState = {
  error: null,
  pending: false,
  profile: null,
  repositories: [],
  languages: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUser: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        if (action.payload) {
          state.profile = initialState.profile;
          state.error = action.payload;
          state.pending = false;
        }
      })
      .addCase(getUserRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getUserRepositories.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserRepositories.rejected, (state, action) => {
        if (action.payload) {
          state.repositories = initialState.repositories;
          state.error = action.payload;
          state.pending = false;
        }
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        state.languages = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getLanguages.pending, (state) => {
        state.pending = true;
      })
      .addCase(getLanguages.rejected, (state, action) => {
        if (action.payload) {
          state.languages = initialState.languages;
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice;
