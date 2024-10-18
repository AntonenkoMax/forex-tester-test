import { ErrorResult } from "services/types";

export interface UserState {
  error: ErrorResult | null;
  pending: boolean;
  charts: ChartsResponse[];
}

export interface ChartsResponse {
  Bars: Bar[];
  ChunkStart: number;
}

export interface Bar {
  Close: number;
  High: number;
  Low: number;
  Open: number;
  TickVolume: number;
  Time: number;
}

export interface ChartsPayload {
  Broker: BrokerEnum;
  Symbol: SymbolEnum;
  Timeframe: number;
  Start: number;
  End: number;
  UseMessagePack: boolean;
}

export enum BrokerEnum {
  ADVANCED = "Advanced",
}

export enum SymbolEnum {
  EURUSD = "EURUSD",
  USDJPY = "USDJPY",
}
