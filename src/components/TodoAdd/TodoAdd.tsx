import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TodoAdd.less";
import { IState, ICommonProps } from "../typings";
import { reqAddTodo } from "../../request/todolist";

type IProps = ICommonProps;

export default function TodoAdd(props: IProps) {
  const { dataChange } = props;
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector(({ todoList }: IState) => todoList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value.trim());
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    await reqAddTodo(newTodo);
    dataChange(1);
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
