import { combineReducers } from "redux";
import todoListReducer from "./todoList";

export default combineReducers({
  todoList: todoListReducer
});
