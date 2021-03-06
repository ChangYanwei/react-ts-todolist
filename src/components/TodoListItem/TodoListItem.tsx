import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { ICommonProps, IState, ITodo } from "../typings";
import "./TodoListItem.less";
import {
  reqDeleteTodo,
  reqToggleTodo,
  reqUpdateTodo,
} from "../../request/todolist";

interface OwnProps {
  todo: ITodo;
}

type IProps = OwnProps & ICommonProps;

export default function TodoListItem(props: IProps) {
  const { todo, dataChange } = props;

  const [showBtn, setShowBtn] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState(todo.content);
  const editInputRef = useRef<HTMLInputElement>(null);
  const todoList = useSelector(({ todoList }: IState) => todoList);

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

  const handleUpdate = async () => {
    if (!editText) return alert("任务不能为空");
    if (editText !== todo.content) {
      const isExist = todoList.find(todo => todo.content === editText);
      if (isExist) return alert("已经有相同名称的任务");
      await reqUpdateTodo({ id: todo.id, content: editText });
      dataChange();
      setShowEdit(false);
    }
    setShowEdit(false);
  };

  const handleToggleTodo = async (id: number) => {
    await reqToggleTodo(id);
    dataChange();
  };

  const handleDeleteTodo = async (id: number) => {
    await reqDeleteTodo(id);
    dataChange();
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
          onClick={() => handleToggleTodo(todo.id)}
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
          onClick={() => handleDeleteTodo(todo.id)}
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
