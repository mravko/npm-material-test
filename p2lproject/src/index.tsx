import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import App from "./containers/App";
import { AppContainer } from "react-hot-loader";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

declare const module: any;
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require("./containers/App").default;
    render(NextApp);
  });
}
