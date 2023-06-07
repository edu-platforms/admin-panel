import "antd/dist/reset.css";
import "@/styles/global.scss";

import { Suspense } from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "@/utils";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ConfigProvider } from "antd";
import { theme } from "@/styles/theme";
import { Loader } from "@/components";
import { ModalProvider } from "@/context";
import { Toaster } from 'react-hot-toast';
import { Router } from "@/router";

export const App = () => {
  return (
    <HistoryRouter history={history}>
      <Provider store={store}>
        <ConfigProvider csp={{ nonce: "edu-admin-panel" }} theme={theme}>
          <ModalProvider>
            <Suspense fallback={<Loader />}>
              <Toaster />
              <Router />
            </Suspense>
          </ModalProvider>
        </ConfigProvider>
      </Provider>
    </HistoryRouter>
  );
};

