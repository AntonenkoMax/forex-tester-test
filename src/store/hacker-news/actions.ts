import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResult } from "../../services/types";
import { sendRequest } from "../../services/send-request";
import { isErrorResult } from "../../utils/helpers/is-error-result";
import { getDataPayload, HackerNewsResponse } from "./types";

export const getData = createAsyncThunk<
  HackerNewsResponse,
  getDataPayload,
  { rejectValue: ErrorResult }
>("hacker-news/get-data", async (params, { rejectWithValue }) => {
  const result = await sendRequest<HackerNewsResponse>({
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}/search`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
