import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Text } from "components";
import {
  StyledSideBar,
  StyledSideBarItemsList,
  StyledSideBarNavigateItem,
} from "./styled";
import { DESKTOP_MENU_OPEN_SIZE, NAVIGATE_ITEM } from "./constants";
import { scrollToTop } from "../../utils/helpers";

const SideBar = () => {
  const currentUrl = useLocation();
  const navigate = useNavigate();

  const pathnameRoutes = currentUrl.pathname.split("/");

  const handleNavigate = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <StyledSideBar width={DESKTOP_MENU_OPEN_SIZE}>
      <StyledSideBarItemsList>
        {NAVIGATE_ITEM.map((item) => {
          const isActive = pathnameRoutes.includes(item.path);

          return (
            <StyledSideBarNavigateItem
              key={item.title}
              isActive={isActive}
              onClick={() => handleNavigate(item.path)}
            >
              <Text color="regular">{item.title}</Text>
            </StyledSideBarNavigateItem>
          );
        })}
      </StyledSideBarItemsList>

      <Button
        width="100%"
        onClick={() => {
          console.log("Log Out!!!");
        }}
      >
        Log Out!!!
      </Button>
    </StyledSideBar>
  );
};

export default SideBar;
