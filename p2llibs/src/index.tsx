import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import MyButton from "./components/MyButton";

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(MyButton);

declare const module: any;
if (module.hot) {
  module.hot.accept("./components/MyButton", () => {
    const NextApp = require("./components/MyButton").default;
    render(NextApp);
  });
}
