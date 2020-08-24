import React from "react";
import { Provider } from "react-redux";

import { App } from "../components";
import store from "../redux/store";

const Main = () => (
  <Provider store={store()}>
    <App />
  </Provider>
);

export default Main;
