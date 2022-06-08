import React, { useState } from "react";
import classNames from "classnames";
import { ITodo } from "../typings";
import "./TodoListItem.less";

interface IProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoListItem(props: IProps) {
  const { todo, toggleTodo, deleteTodo } = props;

  const [isDone, setIsDone] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const handleDone = (id: number) => {
    setIsDone(isDone => !isDone);
    toggleTodo(id);
  };

  return (
    <div
      className="todo-list-item"
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      <div
        className={classNames("todo-list-item_checkbox", {
          "todo-list-item_checkbox-done": isDone,
        })}
        onClick={() => handleDone(todo.id)}
      ></div>
      <span className={classNames({ "todo-list-item_done": todo.done })}>
        {todo.content}
      </span>
      <div
        className={classNames("todo-list-item_delete", {
          "todo-list-item_delete-show": showBtn,
        })}
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </div>
    </div>
  );
}
