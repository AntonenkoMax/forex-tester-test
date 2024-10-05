import styled from "styled-components";
import {
  space,
  typography,
  layout,
  opacity,
  border,
  shadow,
} from "styled-system";
import Text from "components/text";
import { Svg } from "components/svg";

import { ButtonProps } from "./types";
import { baseColors } from "../../styles/colors";

const StyledButton = styled.button<ButtonProps>`
  border-radius: 8px;
  font-weight: 700;
  height: 44px;
  padding: 14px 28px;
  position: relative;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  justify-content: center;
  line-height: 16px;
  outline: 0;
  font-size: 14px;
  transition: all 0.3s ease;
  width: fit-content;
  min-width: 100px;
  border: 0;
  gap: 8px;
  background-color: ${({ color }) =>
    color ? baseColors[color] : baseColors.primary};
  color: ${baseColors.white};

  &:not([disabled]):hover {
    background-color: ${baseColors.primaryHover};
    text-decoration: none;
  }

  ${Svg} {
    fill: ${baseColors.white};
  }

  &:disabled {
    background-color: ${baseColors.regular};
    cursor: not-allowed;
  }

  &:focus {
    outline: unset;
  }

  ${Text} {
    color: inherit;
    font-weight: inherit;
  }

  ${space}
  ${typography}
  ${layout}
  ${opacity}
  ${border}
  ${shadow}
`;

export default StyledButton;
