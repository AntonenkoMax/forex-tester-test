import styled from "styled-components";
import { space, typography, layout, opacity, flexbox } from "styled-system";
import { TextProps } from "./types";

export const Text = styled.p<TextProps>`
  ${space}
  ${typography}
  ${layout}
  ${opacity}
  ${flexbox}
`;

export default Text;
