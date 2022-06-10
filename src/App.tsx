import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TodoApp} />
      </Switch>
    </BrowserRouter>
  );
}
