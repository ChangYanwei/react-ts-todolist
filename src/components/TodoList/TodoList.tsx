import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoContext from "../TodoContext";
import { ITodo } from "../typings";

export default function TodoList() {
  const [filterTodoList, setFilterTodoList] = useState<ITodo[]>([]);
  const { todoList } = useContext(TodoContext);

  const location = useLocation();

  useEffect(() => {
    setFilterTodoList(todoList);
  }, [todoList]);

  useEffect(() => {
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
