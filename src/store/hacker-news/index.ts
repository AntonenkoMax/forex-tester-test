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
    deleteHit: (state, action) => {
      if (state.data) {
        const res = state.data.hits.filter(
          (hit) => hit.created_at_i !== action.payload,
        );

        state.data = { ...state.data, hits: res };
      }
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

export const { resetHackersNews, deleteHit } = hackersNewsSlice.actions;

export default hackersNewsSlice;
