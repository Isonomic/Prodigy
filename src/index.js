import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";

const el = document.getElementById("root");

let render = () => {
  ReactDOM.render(<App />, el);
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
