import React, { useEffect, useReducer } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import TodoInfo from "../TodoInfo/TodoInfo";
import { ITodo, ACTION_TYPES, IAction, IUpdate } from "../typings";
import TodoContext from "../TodoContext";
import "./TodoApp.less";

interface IState {
  todoList: ITodo[];
}

const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo],
      };
    case ACTION_TYPES.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    case ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload),
      };
    case ACTION_TYPES.UPDATE_TODO:
      const { id, content } = payload as IUpdate;
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === id) {
            todo.content = content;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

const initState: IState = {
  todoList: JSON.parse(localStorage.getItem("todoList") || "[]"),
};

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state.todoList));
  }, [state.todoList]);

  return (
    <div className="todo-app">
      <h1 className="todo-app_title">todolist</h1>
      <TodoContext.Provider value={{ todoList: state.todoList, dispatch }}>
        <TodoAdd />
        <TodoList />
        {state.todoList.length > 0 && <TodoFooter />}
      </TodoContext.Provider>
      <TodoInfo />
    </div>
  );
}
