import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../components/typings";

const initialState: ITodo[] = JSON.parse(localStorage.getItem("state") || "{}").todoList || [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo(state, action) {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index, 1);
    },
    updateTodo(state, action) {
      const { id, content } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.content = content;
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
