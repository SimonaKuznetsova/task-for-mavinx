import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { history } from "redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
