import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

import { ROUTES } from "./routes";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />}></Route>
    </Routes>
  );
};

export default Navigation;
