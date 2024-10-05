import styled from "styled-components";
import { baseColors } from "../../styles/colors";

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: end;
  position: sticky;
  top: 0;
  padding: 24px 48px;
  background-color: ${baseColors.regular};
  border-bottom: 1px solid ${baseColors.border};
  z-index: 10;
`;
