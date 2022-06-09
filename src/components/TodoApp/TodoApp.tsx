import React, { useEffect, useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.less";
import { ITodo } from "../typings";
import TodoInfo from "../TodoInfo/TodoInfo";

export default function TodoApp() {
  const [todoList, setTodoList] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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

  const updateTodo = (id: number, content: string) => {
    setTodoList(todoList => {
      return todoList.map(todo => {
        if (todo.id === id) {
          todo.content = content;
        }
        return todo;
      });
    });
  };

  return (
    <div className="todo-app">
      <h1 className="todo-app_title">todolist</h1>
      <TodoAdd todoList={todoList} addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {todoList.length > 0 && <TodoFooter todoList={todoList} />}
      <TodoInfo />
    </div>
  );
}
