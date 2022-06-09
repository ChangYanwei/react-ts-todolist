import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TodoListItem from "../TodoListItem/TodoListItem";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  updateTodo: (id: number, content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList(props: IProps) {
  const { todoList, updateTodo, toggleTodo, deleteTodo } = props;
  const [filterTodoList, setFilterTodoList] = useState<ITodo[]>([]);

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
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            todoList={todoList}
            updateTodo={updateTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}
