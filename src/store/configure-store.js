import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
// import FlashMessage from "./flash-message";
import reducers from "../reducers";

export default function configureStore()
{
  const middlewares = [];
  if (process.env.NODE_ENV !== "production"){
    middlewares.push(createLogger());
    middlewares.push(thunk);
  }
  return createStore(reducers, applyMiddleware(...middlewares));
}
