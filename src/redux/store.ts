import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IState } from "../components/typings";
import reducer from "./reducers";

const initState: IState = JSON.parse(localStorage.getItem("state") || "{}");
const saveState = (state: IState) => {
  localStorage.setItem("state", JSON.stringify(state));
};

const store = createStore(reducer, initState, composeWithDevTools());
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});
export default store;