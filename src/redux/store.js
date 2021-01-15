import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "redux/saga";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [applyMiddleware(sagaMiddleware), applyMiddleware(thunk)];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store =
  process.env.NODE_ENV === "development" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? createStore(
        persistedReducer,
        {},
        compose(...middlewares, window.__REDUX_DEVTOOLS_EXTENSION__())
      )
    : createStore(persistedReducer, {}, compose(...middlewares));

const persistor = persistStore(store);

export { store, persistor };

sagaMiddleware.run(rootSaga);
