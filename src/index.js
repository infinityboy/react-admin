/** APP入口 **/
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import Router from "./router";

/** 公共样式 **/
import "normalize.css";
import "@/assets/styles/default.less";
import "@/assets/styles/global.less";

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.register();

if (module.hot) {
  module.hot.accept();
}
