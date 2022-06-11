import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import { IState, ITodo } from "../typings";

export default function TodoList() {
  const todoList = useSelector(({ todoList }: IState) => todoList);
  const [filterTodoList, setFilterTodoList] = useState<ITodo[]>([]);

  const location = useLocation();

  useEffect(() => {
    console.log("todolist--", todoList);

    setFilterTodoList(todoList);
    changeTodoList(location.pathname);
  }, [todoList]);

  useEffect(() => {
    console.log("pathname", todoList);

    changeTodoList(location.pathname);
  }, [location]);

  const changeTodoList = (pathname: string) => {
    switch (pathname) {
      case "/":
        setFilterTodoList([...todoList]);
        break;
      case "/active":
        setFilterTodoList(todoList.filter(todo => !todo.done));
        break;
      case "/completed":
        setFilterTodoList(todoList.filter(todo => todo.done));
        break;
    }
  };

  return (
    <div>
      {filterTodoList.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
