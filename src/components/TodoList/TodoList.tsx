import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { ITodo } from "../typings";

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList(props: IProps) {
  const { todoList, toggleTodo, deleteTodo } = props;
  return (
    <div>
      {todoList.map(todo => {
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
