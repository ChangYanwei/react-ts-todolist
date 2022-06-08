import React from "react";
import { ITodo } from "../typings";
import "./TodoFooter.less";

interface IProps {
  todoList: ITodo[];
}

export default function TodoFooter(props: IProps) {
  const { todoList } = props;
  const leftNum = todoList.filter(todo => !todo.done).length;
  return (
    <div className="todo-footer">
      {leftNum > 0 ? (
        <div className="todo-footer_left">
          剩余 <span className="todo-footer_left-num">{leftNum}</span>{" "}
          个任务未完成
        </div>
      ) : (
        <div className="todo-footer_all-done">任务已全部完成</div>
      )}

      <ul className="todo-footer_filters">
        <li className="todo-footer_filters-btn">所有</li>
        <li className="todo-footer_filters-btn">已完成</li>
        <li className="todo-footer_filters-btn">未完成</li>
      </ul>
    </div>
  );
}
