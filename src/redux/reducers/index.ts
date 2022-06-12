import { combineReducers } from "redux";
import todoListReducer from "../todoSlice";

export default combineReducers({
  todoList: todoListReducer
});
