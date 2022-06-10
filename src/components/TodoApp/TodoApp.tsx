import React from "react";
import { useSelector } from "react-redux";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import TodoInfo from "../TodoInfo/TodoInfo";
import "./TodoApp.less";
import { IState } from "../typings";

export default function TodoApp() {
  const todoList = useSelector(({ todoList }: IState) => todoList);

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
