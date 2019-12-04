import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";
import { AppContainer } from "react-hot-loader";

const render = (Component: any) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);

declare const module: any;
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require("./containers/App").default;
    render(NextApp);
  });
}
