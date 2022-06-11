import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import TodoInfo from "../TodoInfo/TodoInfo";
import "./TodoApp.less";
import { IState } from "../typings";
import { getTodo } from "../../redux/actions";

export default function TodoApp() {
  const dispatch = useDispatch();

  const todoList = useSelector(({ todoList }: IState) => todoList);

  useEffect(() => {
    if (todoList.length === 0) {
      console.log("请求");

      dispatch<any>(getTodo());
    }
  }, []);

  return (
    <div className="todo-app">
      <h1 className="todo-app_title">TODOLIST</h1>
      <TodoAdd />
      <TodoList />
      {todoList.length > 0 && <TodoFooter />}
      <TodoInfo />
    </div>
  );
}
