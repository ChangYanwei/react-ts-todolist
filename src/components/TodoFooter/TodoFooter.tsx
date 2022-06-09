import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { ITodo } from "../typings";
import "./TodoFooter.less";

interface IProps {
  todoList: ITodo[];
  changeHash: (hash: string) => void;
}

export default function TodoFooter(props: IProps) {
  const { todoList, changeHash } = props;
  const leftNum = todoList.filter(todo => !todo.done).length;

  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(location.hash);
  }, []);

  const HandleChangeHash = (hash: string) => {
    setHash(hash);
    changeHash(hash);
  };

  const getLeftElement = () => {
    if (leftNum === 0) {
      return <div className="todo-footer_all-done">任务已全部完成</div>;
    }
    if (hash === "#/completed") {
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
        <a
          href="#/"
          onClick={() => HandleChangeHash("#/")}
          className={classNames("todo-footer_filters-btn", {
            "todo-footer_filters-seleted": hash === "#/" || hash === "",
          })}
        >
          所有
        </a>
        <a
          href="#/completed"
          onClick={() => HandleChangeHash("#/completed")}
          className={classNames("todo-footer_filters-btn", {
            "todo-footer_filters-seleted": hash === "#/completed",
          })}
        >
          已完成
        </a>
        <a
          href="#/active"
          onClick={() => HandleChangeHash("#/active")}
          className={classNames("todo-footer_filters-btn", {
            "todo-footer_filters-seleted": hash === "#/active",
          })}
        >
          未完成
        </a>
      </div>
    </div>
  );
}
