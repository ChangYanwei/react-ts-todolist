import React from 'react';
import { ITodo, IAction } from './typings';

interface IContext {
  todoList: ITodo[];
  dispatch: React.Dispatch<IAction>
}

const TodoContext = React.createContext<IContext>({} as IContext);
export default TodoContext