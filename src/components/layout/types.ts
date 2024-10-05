import { HTMLAttributes } from "react";
import {
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  FlexboxProps,
  ResponsiveValue,
} from "styled-system";
import { CSS } from "styled-components/dist/types";

export interface BoxProps
  extends BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement> {
  cursor?: React.CSSProperties["cursor"];
}

export interface FlexProps extends BoxProps, FlexboxProps, GapProps {}

export type GapProps = {
  gap?: ResponsiveValue<CSS.Property.Gap>;
  rowGap?: ResponsiveValue<CSS.Property.RowGap>;
  columnGap?: ResponsiveValue<CSS.Property.ColumnGap>;
};
