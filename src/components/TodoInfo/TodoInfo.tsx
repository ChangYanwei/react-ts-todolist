import React from "react";
import "./TodoInfo.less";

export default function TodoInfo() {
  return (
    <div className="todo-info">
      <p>Enter键添加一个任务</p>
      <p>双击任务可进行编辑</p>
      <p>
        Created by&nbsp;
        <a
          href="https://github.com/ChangYanwei/react-ts-todolist"
          className="todo-info_link"
          target="_blank"
          rel="noreferrer"
        >
          changyanwei
        </a>
      </p>
    </div>
  );
}
