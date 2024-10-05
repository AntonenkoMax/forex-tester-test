import { ElementType } from "react";
import { LayoutProps, SpaceProps } from "styled-system";

import { Colors } from "../input/types";
import { PolymorphicComponentProps } from "../input/types";

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | ElementType;
  isLoading?: boolean;
  color?: keyof Colors;
  borderColor?: keyof Colors;
  disabled?: boolean;
}

export type ButtonProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, BaseButtonProps>;
