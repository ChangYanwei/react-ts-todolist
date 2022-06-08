import React from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.less";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1 className="todo-app_title">todolist</h1>
      <TodoAdd />
      <TodoList />
      <TodoFooter />
    </div>
  );
}
