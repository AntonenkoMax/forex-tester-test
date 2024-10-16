import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import { ToastContainer } from "react-toastify";

import { StyleSheetManager } from "styled-components";

import store from "./store/store";

import { shouldForwardProp } from "utils/helpers";

import { GlobalStyle } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Root: React.FC = () => {
  // useEffect(() => {
  //   // window.addEventListener("mousemove", handleMouseMove);
  //   window.addEventListener("wheel", handleWheel);
  //
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  const handleMouseMove = () => {
    console.log("handleMouseMove");
  };

  const handleWheel = () => {
    console.log("handleWheel");
  };

  return (
    <div>
      <GlobalStyle />
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Provider store={store}>
          <Navigation />
          <ToastContainer
            draggable
            rtl={false}
            closeOnClick
            pauseOnHover
            theme="light"
            autoClose={8000}
            pauseOnFocusLoss
            newestOnTop={false}
            position="top-right"
            hideProgressBar={false}
          />
        </Provider>
      </StyleSheetManager>
    </div>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
