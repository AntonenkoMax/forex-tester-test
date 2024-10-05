import styled from "styled-components";
import {
  border,
  layout,
  position,
  space,
  flexbox,
  Config,
  system,
} from "styled-system";
import { BoxProps, FlexProps } from "./types";

const config: Config = { gap: true, rowGap: true, columnGap: true };

const gap = system(config);

export const Box = styled.div<BoxProps>`
  cursor: ${({ cursor }) => cursor && cursor};

  ${border}
  ${layout}
    ${position}
    ${space}
`;

export const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${gap}
  ${flexbox}
`;
