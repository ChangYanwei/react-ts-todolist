import React, { useContext, useState } from "react";
import TodoContext from "../TodoContext";
import "./TodoAdd.less";
import { ACTION_TYPES } from "../typings";

export default function TodoAdd() {
  const [content, setContent] = useState("");
  const { todoList, dispatch } = useContext(TodoContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!content) {
      return alert("输入内容不能为空");
    }
    const isExist = todoList.find(todo => todo.content === content);
    if (isExist) {
      return alert("已经存在相同的任务");
    }
    const newTodo = {
      id: new Date().getTime(),
      content,
      done: false,
    };
    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: newTodo,
    });
    setContent("");
  };

  return (
    <div className="todo-add">
      <input
        type="text"
        value={content}
        className="todo-add_input"
        placeholder="请输入任务名称"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
}
