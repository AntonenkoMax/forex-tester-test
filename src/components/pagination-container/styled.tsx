import styled from "styled-components";
import { Svg } from "components";
import { baseColors } from "styles/colors";

const StyledCustomPaginate = styled.div`
  .pagination {
    display: flex;
    list-style: none;
  }

  .page-link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: unset;
    border-radius: 6px;
    background: transparent;
    color: #94a0b8;

    &:hover {
      color: #e1e6ef;

      ${Svg} {
        path {
          stroke: #e1e6ef;
        }
      }
    }

    &:focus {
      box-shadow: unset;
    }
  }

  .page-item {
    border: unset;
    display: flex;
    color: #94a0b8;
    user-select: none;
    font-size: 14px;
    line-height: 21px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 4px;
    margin-right: 4px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    color: #0a0d14;
    cursor: default;
    user-select: none;
  }

  .page-item.active .page-link {
    background-color: ${baseColors.primary};
    border-color: ${baseColors.primary};

    &:hover {
      background-color: ${baseColors.primaryHover};
      border-color: ${baseColors.primaryHover};
      color: #0a0d14;
    }
  }

  .transparent > .page-link {
    opacity: 0.3;
    cursor: default;

    &:hover {
      ${Svg} {
        path {
          stroke: #94a0b8;
        }
      }
    }
  }
`;

export default StyledCustomPaginate;
