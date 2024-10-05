import { ErrorResult } from "../../services/types";

export interface UserState {
  error: ErrorResult | null;
  pending: boolean;
  profile: UserResponse | null;
  repositories: Repository[];
  languages: getLanguagesResponse[];
}

export interface UserResponse {
  id: string;
  login: string;
  name: string | null;
  public_repos: number | null;
  created_at: string;
}

export type UserIdPayload = string;

export interface Repository {
  html_url: string;
  name: string;
}

export enum SortEnum {
  CREATED = "created",
  UPDATED = "updated",
  PUSHED = "pushed",
  FULL_NAME = "full_name",
}

export interface getUserRepositoriesPayload {
  userName: UserIdPayload;
  sort?: SortEnum;
  per_page?: number;
}

export interface getLanguagesPayload {
  userName: UserIdPayload;
  repositories: Repository[];
}

export interface getLanguagesResponse {
  [key: string]: number;
}
