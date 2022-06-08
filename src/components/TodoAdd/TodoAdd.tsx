import React, { useState } from "react";
import "./TodoAdd.less";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  addTodo: (todo: ITodo) => void;
}

export default function TodoAdd(props: IProps) {
  const { todoList, addTodo } = props;
  const [content, setContent] = useState("");

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
    addTodo(newTodo);
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
