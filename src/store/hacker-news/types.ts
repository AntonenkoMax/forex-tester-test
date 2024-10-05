import { ErrorResult } from "../../services/types";

export interface HackersNewsState {
  error: ErrorResult | null;
  pending: boolean;
  data: HackerNewsResponse | null;
}

export interface HackerNewsResponse {
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  hits: Hit[];
}

export interface Hit {
  author: string;
  children: number[];
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
}

export interface getDataPayload {
  tags: string;
  hitsPerPage?: number;
  page?: number;
}
