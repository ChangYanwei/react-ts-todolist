import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { IState } from "../components/typings";
import reducer from "./reducers";

const initState: IState = JSON.parse(localStorage.getItem("state") || "{}");

const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
  console.log("更新store");

  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
});
export default store;