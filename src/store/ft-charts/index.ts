import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { getCharts } from "./actions";

const initialState: UserState = {
  error: null,
  pending: false,
  charts: null,
};

const chartsSlice = createSlice({
  name: "ft-charts",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetCharts: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCharts.fulfilled, (state, action) => {
        // state.profile = action.payload;
        state.pending = false;
        state.error = null;
      })
      .addCase(getCharts.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCharts.rejected, (state, action) => {
        if (action.payload) {
          // state.profile = initialState.profile;
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetCharts } = chartsSlice.actions;

export default chartsSlice;
