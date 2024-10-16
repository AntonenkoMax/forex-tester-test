import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../../services/send-request";
import { isErrorResult } from "../../utils/helpers/is-error-result";
import { ErrorResult } from "../../services/types";
import {
  UserIdPayload,
  UserResponse,
  Repository,
  getUserRepositoriesPayload,
  getLanguagesPayload,
  getLanguagesResponse,
} from "./types";

// https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false
// https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=USDJPY&Timeframe=1&Start=57674&End=59113&UseMessagePack=false
export const getCharts = createAsyncThunk<
  any,
  any,
  { rejectValue: ErrorResult }
>("ft-charts/get-charts", async (params, { rejectWithValue }) => {
  const result = await sendRequest<any>({
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}`,
    params,
  });

  if (isErrorResult(result)) {
    return rejectWithValue(result);
  }

  console.log(11111, result, 11111);

  return result;
});
//
// export const getUser = createAsyncThunk<
//   UserResponse,
//   UserIdPayload,
//   { rejectValue: ErrorResult }
// >("users/get-user", async (userName, { rejectWithValue }) => {
//   const result = await sendRequest<UserResponse>({
//     method: "GET",
//     url: `${process.env.REACT_APP_API_URL}/users/${userName}`,
//   });
//
//   if (isErrorResult(result)) {
//     return rejectWithValue(result);
//   }
//
//   return result;
// });
//
// export const getUserRepositories = createAsyncThunk<
//   Repository[],
//   getUserRepositoriesPayload,
//   { rejectValue: ErrorResult }
// >(
//   "users/get-user-repositories",
//   async ({ userName, ...params }, { rejectWithValue }) => {
//     const result = await sendRequest<Repository[]>({
//       method: "GET",
//       url: `${process.env.REACT_APP_API_URL}/users/${userName}/repos`,
//       params,
//     });
//
//     if (isErrorResult(result)) {
//       return rejectWithValue(result);
//     }
//
//     return result;
//   },
// );
//
// export const getLanguages = createAsyncThunk<
//   getLanguagesResponse[],
//   getLanguagesPayload,
//   { rejectValue: ErrorResult }
// >(
//   "users/get-languages",
//   async ({ userName, repositories }, { rejectWithValue }) => {
//     try {
//       const promises = repositories.map(async (repositoryNames) => {
//         const data = await sendRequest<getLanguagesResponse>({
//           method: "GET",
//           url: `${process.env.REACT_APP_API_URL}/repos/${userName}/${repositoryNames.name}/languages`,
//         });
//
//         if (isErrorResult(data)) {
//           throw new Error(`${data.message}`);
//         }
//
//         return data;
//       });
//
//       const res = await Promise.all(promises);
//
//       return res as getLanguagesResponse[];
//     } catch (error) {
//       return rejectWithValue(error as ErrorResult);
//     }
//   },
// );
