import { HackersNewsState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./actions";

const initialState: HackersNewsState = {
  error: null,
  pending: false,
  data: null,
};

const hackersNewsSlice = createSlice({
  name: "hackersNews",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetHackersNews: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getData.pending, (state) => {
        state.pending = true;
      })
      .addCase(getData.rejected, (state, action) => {
        if (action.payload) {
          state.data = initialState.data;
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetHackersNews } = hackersNewsSlice.actions;

export default hackersNewsSlice;
