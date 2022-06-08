import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp";
import "./App.less";

export default function App() {
  return (
    <div>
      <TodoApp />
    </div>
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<TodoApp />} />
    //   </Routes>
    // </HashRouter>
  );
}
