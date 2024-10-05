import styled from "styled-components";
import { baseColors } from "styles/colors";

export const StyledHackersCard = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 24px;
  background-color: ${baseColors.light};
  width: 100%;
  gap: 24px;
`;

export const StyledCardStatus = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: fit-content;
  min-width: 120px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ isActive }) =>
    isActive ? baseColors.primary : baseColors.green};
  color: ${baseColors.white};
`;

export const StyledNameSubject = styled.div`
  display: flex;
  width: fit-content;
  padding: 8px;
  background-color: ${baseColors.white};
  border-radius: 4px;
  border: 1px solid ${baseColors.border};
`;

export const StyledDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: fit-content;
  min-width: 220px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${baseColors.regular}50;
  color: ${baseColors.white};
  margin-left: auto;
`;
