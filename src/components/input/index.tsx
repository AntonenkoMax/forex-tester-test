import styled, { css } from "styled-components";
import { space, typography } from "styled-system";
import { InputProps, BaseInputProps } from "./types";
import { baseColors } from "../../styles/colors";

export const getBorderStyles = ({
  error,
  isTouched,
  borderColor,
}: BaseInputProps) => {
  if (error && isTouched) {
    return css`
      border: 1px solid ${baseColors.red};

      &:focus {
        border: 1px solid ${baseColors.red} !important;
      }

      &:hover {
        border: 1px solid ${baseColors.red} !important;
      }
    `;
  } else if (borderColor) {
    return css`
      border: 1px solid ${baseColors[borderColor]};

      &:focus {
        border: 1px solid ${borderColor} !important;
      }

      &:hover {
        border: 1px solid ${borderColor} !important;
      }
    `;
  }

  return css`
    border: 1px solid ${baseColors.border};
  `;
};

export const Input = styled.input<InputProps>`
  border-radius: 8px;
  color: ${({ color }) => color ?? baseColors.regular};
  display: block;
  font-size: 14px;
  font-weight: 600;
  height: 44px;
  outline: 0;
  padding: 0 14px;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: ${baseColors.regular};
    opacity: 0.6;
    font-weight: 400;
  }

  &:disabled {
    background-color: ${baseColors.disabled};
    box-shadow: none;
    color: ${baseColors.white}24;
    cursor: not-allowed;
    border: none;
  }

  &:focus:not(:disabled) {
    border: 1px solid ${baseColors.regular};
  }

  &:hover:not(:disabled) {
    border: 1px solid ${baseColors.regular};
  }

  ${getBorderStyles}

  ${typography}
    ${space}
`;
