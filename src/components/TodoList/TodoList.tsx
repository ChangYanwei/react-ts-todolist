import React, { useEffect, useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  hash: string;
}

export default function TodoList(props: IProps) {
  const { todoList, toggleTodo, deleteTodo, hash } = props;
  const [filterTodoList, setFilterTodoList] = useState(todoList);
  const changeTodoList = (hash: string) => {
    switch (hash) {
      case "":
      case "#/":
        setFilterTodoList([...todoList]);
        break;
      case "#/active":
        setFilterTodoList(todoList.filter(todo => !todo.done));
        break;
      case "#/completed":
        setFilterTodoList(todoList.filter(todo => todo.done));
        break;
    }
  };

  useEffect(() => {
    changeTodoList(hash);
  }, [hash]);

  return (
    <div>
      {filterTodoList.map(todo => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}
