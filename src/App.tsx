import React from "react";
import classNames from "classnames";
import TodoApp from "./components/TodoApp/TodoApp";
import "./App.less";

export default function App() {
  return (
    <div className="container">
      <TodoApp />
    </div>
  );
}
