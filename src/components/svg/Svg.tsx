import styled, { css, keyframes } from "styled-components";
import { space, system, Config } from "styled-system";
import { SvgProps } from "./types";
import { baseColors } from "../../styles/colors";

const config: Config = {
  rotate: true,
};

export const rotate = system(config);

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

const spinStyle = css`
  animation: ${rotateAnimation} 2s linear infinite;
`;

const Svg = styled.svg<SvgProps>`
  align-self: center;
  flex-shrink: 0;
  transition: all 0.3s ease;

  fill: ${({ color }) => color && baseColors[color]};
  ${({ spin }) => spin && spinStyle}
  ${rotate}
    ${space}
`;

Svg.defaultProps = {
  spin: false,
  color: "regular",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
};

export default Svg;
