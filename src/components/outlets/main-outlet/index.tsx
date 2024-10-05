import React from "react";
import { Outlet } from "react-router-dom";
import { Flex, Header, SideBar, Footer } from "components";
import { DESKTOP_MENU_OPEN_SIZE } from "../../sidebar/constants";

const MainOutlet: React.FC = () => {
  return (
    <Flex position="relative" minHeight="100vh">
      <SideBar />
      <Flex
        flex="1"
        flexDirection="column"
        maxWidth={`calc(100vw - ${DESKTOP_MENU_OPEN_SIZE})`}
      >
        <Header />
        <Flex height="100%">
          <Outlet />
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default MainOutlet;
