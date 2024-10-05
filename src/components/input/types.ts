import { ElementType, ComponentProps } from "react";
import { SpaceProps, TypographyProps } from "styled-system";
import { baseColors } from "../../styles/colors";

export type BaseColors = {
  [property in keyof typeof baseColors]: string;
};

export interface Colors extends BaseColors {}

export interface BaseInputProps extends SpaceProps, TypographyProps {
  isTouched?: boolean;
  error?: boolean;
  borderColor?: keyof Colors;
}

export type AsProps<E extends ElementType = ElementType> = {
  as?: E;
};

export type MergeProps<E extends ElementType> = AsProps<E> &
  Omit<ComponentProps<E>, keyof AsProps>;

export type PolymorphicComponentProps<E extends ElementType, P> = P &
  MergeProps<E>;

export type InputProps<P extends ElementType = "input"> =
  PolymorphicComponentProps<P, BaseInputProps>;
