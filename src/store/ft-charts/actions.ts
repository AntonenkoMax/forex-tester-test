import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "services/send-request";
import { isErrorResult } from "utils/helpers/is-error-result";
import { ErrorResult } from "services/types";
import { ChartsResponse, ChartsPayload } from "./types";

// https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false
// https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=USDJPY&Timeframe=1&Start=57674&End=59113&UseMessagePack=false
export const getCharts = createAsyncThunk<
  ChartsResponse[],
  ChartsPayload,
  { rejectValue: ErrorResult }
>("ftCharts/get-charts", async (params, { rejectWithValue }) => {
  const result = await sendRequest<ChartsResponse[]>({
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  return result;
});
