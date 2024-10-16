import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

import { ROUTES } from "./routes";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />}>
        {/*<Route path={ROUTES.home} element={<MyClassComponent />}>*/}
        {/*<Route*/}
        {/*  index*/}
        {/*  element={<Navigate replace to={"/" + ROUTES.dashboard} />}*/}
        {/*/>*/}
        {/*<Route path={ROUTES.dashboard}>*/}
        {/*  <Route index element={<Dashboard />} />*/}
        {/*</Route>*/}
        {/*<Route path={ROUTES.about}>*/}
        {/*  <Route index element={<About />} />*/}
        {/*</Route>*/}
        {/*<Route path={ROUTES.settings}>*/}
        {/*  <Route index element={<Settings />} />*/}
        {/*</Route>*/}
      </Route>
    </Routes>
  );
};

export default Navigation;
