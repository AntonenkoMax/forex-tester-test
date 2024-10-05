import styled from "styled-components";
import { baseColors } from "../../styles/colors";

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  padding: 24px 48px;
  background-color: ${baseColors.regular};
  border-top: 1px solid ${baseColors.border};
  z-index: 10;
`;
