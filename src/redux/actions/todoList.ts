import React from "react";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ACTION_TYPES, IAction, IState, ITodo, IUpdate } from "../../components/typings";
import { reqAddTodo, reqDeleteTodo, reqGetTodoList, reqToggleTodo, reqUpdateTodo } from "../../request/todolist";

export type RootThunkAction = ThunkAction<void, IState, unknown, IAction>

export const saveTodo = (payload: ITodo[]) => ({ type: ACTION_TYPES.SAVE_TODO, payload });

export const getTodo = (): RootThunkAction => {
  return (dispatch: Dispatch) => {
    reqGetTodoList().then(res => {
      dispatch(saveTodo(res.data));
    });
  };
};

export const addTodo = (payload: ITodo) => {
  return async (dispatch: Dispatch) => {
    reqAddTodo(payload);
    dispatch<any>(getTodo());
  };
};

export const toggleTodo = (payload: number) => {
  return async (dispatch: Dispatch) => {
    reqToggleTodo(payload);
    dispatch<any>(getTodo());
  };
};

export const deleteTodo = (payload: number) => {
  return async (dispatch: Dispatch) => {
    reqDeleteTodo(payload);
    dispatch<any>(getTodo());
  };
};

export const updateTodo = (payload: IUpdate) => {
  return async (dispatch: Dispatch) => {
    reqUpdateTodo(payload);
    dispatch<any>(getTodo());
  };
};