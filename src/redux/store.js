import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";


const sagasMiddleware = createSagaMiddleware();
const middlewares = [ sagasMiddleware];



const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);
sagasMiddleware.run(rootSaga);


export { store, persistor };
