import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./TodoFooter.less";
import { FilterStatus } from "../typings";

interface IProps {
  statusChange: (status: FilterStatus) => void;
  activeNum: number;
  completedNum: number;
}

export default function TodoFooter(props: IProps) {
  const { statusChange, activeNum, completedNum } = props;

  const pathArr = [
    {
      path: "/",
      name: "所有",
      status: FilterStatus.ALL,
    },
    {
      path: "/completed",
      name: "已完成",
      status: FilterStatus.COMPLETED,
    },
    {
      path: "/active",
      name: "未完成",
      status: FilterStatus.ACTIVE,
    },
  ];

  const location = useLocation();

  const getLeftElement = () => {
    if (location.pathname === "/completed") {
      return (
        <div className="todo-footer_left">
          总计已完成{" "}
          <span className="todo-footer_left-num">{completedNum}</span> 个任务
        </div>
      );
    }
    return (
      <div className="todo-footer_left">
        总计剩余 <span className="todo-footer_left-num">{activeNum}</span>{" "}
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
            onClick={() => statusChange(item.status)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
