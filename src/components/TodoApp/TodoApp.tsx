import React, { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.less";
import { ITodo } from "../typings";

export default function TodoApp() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodoList([...todoList, todo]);
  };

  const toggleTodo = (id: number) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1 className="todo-app_title">todolist</h1>
      <TodoAdd todoList={todoList} addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {todoList.length > 0 && <TodoFooter todoList={todoList} />}
    </div>
  );
}
