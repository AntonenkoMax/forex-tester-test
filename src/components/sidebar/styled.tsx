import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import { baseColors } from "../../styles/colors";
import { Flex } from "components";
import { SideBarNavItemProps } from "./types";

export const StyledSideBar = styled.div<LayoutProps>`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  justify-content: space-between;
  padding: 32px 16px;
  background-color: ${baseColors.regular};
  border-right: 1px solid ${baseColors.border};
  transition: width 0.3s ease;

  ${layout}
`;

export const StyledSideBarNavigateItem = styled(Flex)<SideBarNavItemProps>`
  padding: 14px 24px;
  align-items: center;
  width: 100%;
  background-color: ${baseColors.primary};
  transition: border-right 0.3s ease;
  color: ${baseColors.white};
  font-weight: 700;
  font-size: 14px;
  border-right: ${({ isActive }) =>
    isActive
      ? `1px solid ${baseColors.white}`
      : `1px solid ${baseColors.border}`};

  &:hover {
    background-color: ${baseColors.primaryHover};
  }
`;

export const StyledSideBarItemsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
`;
