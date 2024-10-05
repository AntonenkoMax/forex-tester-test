import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard, About, Settings } from "../pages";
import { MainOutlet } from "components";

import { ROUTES } from "./routes";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<MainOutlet />}>
        <Route
          index
          element={<Navigate replace to={"/" + ROUTES.dashboard} />}
        />
        <Route path={ROUTES.dashboard}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path={ROUTES.about}>
          <Route index element={<About />} />
        </Route>
        <Route path={ROUTES.settings}>
          <Route index element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
