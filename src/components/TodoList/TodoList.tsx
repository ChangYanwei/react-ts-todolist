import React, { useEffect, useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  updateTodo: (id: number, content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  hash: string;
}

export default function TodoList(props: IProps) {
  const { todoList, updateTodo, toggleTodo, deleteTodo, hash } = props;
  const [filterTodoList, setFilterTodoList] = useState<ITodo[]>(todoList);

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

  useEffect(() => {
    setFilterTodoList(todoList);
  }, [todoList]);

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
