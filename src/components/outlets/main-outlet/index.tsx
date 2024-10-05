import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, SideBar } from "components";
import { DESKTOP_MENU_OPEN_SIZE } from "../../sidebar/constants";

const MainOutlet: React.FC = () => {
  return (
    <Flex position="relative" minHeight="100vh" id="MainOutlet">
      <SideBar />
      <Flex
        id="mainContent"
        flex="1"
        flexDirection="column"
        maxWidth={`calc(100vw - ${DESKTOP_MENU_OPEN_SIZE})`}
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default MainOutlet;
