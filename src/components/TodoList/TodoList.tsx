import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import { ICommonProps, IState } from "../typings";
import emptyImg from "@src/assets/empty.jpg";
import "./TodoList.less";

type IProps = ICommonProps;

export default function TodoList(props: IProps) {
  const { dataChange } = props;
  const todoList = useSelector(({ todoList }: IState) => todoList);

  return (
    <div className="todo-list">
      {todoList.length === 0 && (
        <div className="todo-list_empty">
          <img src={emptyImg} alt="" />
          <p>暂无数据</p>
        </div>
      )}
      {todoList.map(todo => {
        return (
          <TodoListItem key={todo.id} todo={todo} dataChange={dataChange} />
        );
      })}
    </div>
  );
}
