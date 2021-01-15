import { createStore, compose, applyMiddleware } from "redux";
import { createRootReducer } from "redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "redux/saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(routerMiddleware(history), sagaMiddleware);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["router"],
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

const store =
  process.env.NODE_ENV === "development" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? createStore(
        persistedReducer,
        {},
        compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__())
      )
    : createStore(persistedReducer, {}, compose(middlewares));

const persistor = persistStore(store);

export { store, persistor };

sagaMiddleware.run(rootSaga);
