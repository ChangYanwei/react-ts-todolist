import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./TodoFooter.less";
import { IState } from "../typings";

export default function TodoFooter() {
  const todoList = useSelector(({ todoList }: IState) => todoList);
  const leftNum = todoList.filter(todo => !todo.done).length;
  const pathArr = [
    {
      path: "/",
      name: "所有",
    },
    {
      path: "/completed",
      name: "已完成",
    },
    {
      path: "/active",
      name: "未完成",
    },
  ];

  const location = useLocation();

  const getLeftElement = () => {
    if (leftNum === 0) {
      return <div className="todo-footer_all-done">任务已全部完成</div>;
    }
    if (location.pathname === "/completed") {
      return (
        <div className="todo-footer_left">
          已完成{" "}
          <span className="todo-footer_left-num">
            {todoList.length - leftNum}
          </span>{" "}
          个任务
        </div>
      );
    }
    return (
      <div className="todo-footer_left">
        剩余 <span className="todo-footer_left-num">{leftNum}</span>{" "}
        个任务未完成
      </div>
    );
  };

  return (
    <div className="todo-footer">
      {getLeftElement()}

      <div className="todo-footer_filters">
        {pathArr.map(item => (
          <NavLink
            to={item.path}
            exact
            key={item.path}
            className="todo-footer_filters-btn"
            activeClassName="todo-footer_filters-seleted"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
