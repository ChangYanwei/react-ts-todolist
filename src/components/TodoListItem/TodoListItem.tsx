import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { ITodo } from "../typings";
import "./TodoListItem.less";

interface IProps {
  todo: ITodo;
  todoList: ITodo[];
  updateTodo: (id: number, content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoListItem(props: IProps) {
  const { todo, todoList, updateTodo, toggleTodo, deleteTodo } = props;

  const [showBtn, setShowBtn] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState(todo.content);
  const editInputRef = useRef<HTMLInputElement>(null);

  const showEditInput = () => {
    setShowEdit(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setShowEdit(false);
      setEditText(todo.content);
    } else if (e.key === "Enter") {
      handleUpdate();
    }
  };

  const handleUpdate = () => {
    if (!editText) return alert("任务不能为空");
    if (editText !== todo.content) {
      const isExist = todoList.find(todo => todo.content === editText);
      if (isExist) return alert("已经有相同名称的任务");
      updateTodo(todo.id, editText);
      setShowEdit(false);
    }
    setShowEdit(false);
  };

  useEffect(() => {
    if (showEdit) {
      editInputRef.current!.focus();
    }
  }, [showEdit]);

  return (
    <div className="todo-list-item">
      <div
        className={classNames("todo-list-item_left", {
          "todo-list-item_left-hide": showEdit,
        })}
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={() => setShowBtn(false)}
      >
        <div
          className={classNames("todo-list-item_left_checkbox", {
            "todo-list-item_left_checkbox-done": todo.done,
          })}
          onClick={() => toggleTodo(todo.id)}
        ></div>
        <span
          className={classNames("todo-list-item_left_content", {
            "todo-list-item_left_content-done": todo.done,
          })}
          onDoubleClick={showEditInput}
        >
          {todo.content}
        </span>
        <div
          className={classNames("todo-list-item_left_delete", {
            "todo-list-item_left_delete-show": showBtn,
          })}
          onClick={() => deleteTodo(todo.id)}
        >
          X
        </div>
      </div>

      <input
        type="text"
        value={editText}
        ref={editInputRef}
        className={classNames("todo-list-item_edit", {
          "todo-list-item_edit-show": showEdit,
        })}
        onBlur={handleUpdate}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
