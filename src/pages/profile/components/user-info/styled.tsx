import styled from "styled-components";
import { baseColors } from "styles/colors";

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  margin-top: 44px;
  border: 1px solid ${baseColors.border};
  border-radius: 12px;
  padding: 16px;
`;

export const StyledUserInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  padding-bottom: 4px;
  gap: 14px;
  align-items: center;
  border-bottom: 1px solid ${baseColors.border}50;
`;

export const StyledLink = styled.a`
  color: ${baseColors.primary};

  &:hover {
    color: ${baseColors.primaryHover};
  }
`;
