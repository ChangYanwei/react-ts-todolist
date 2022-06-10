import { ACTION_TYPES, ITodo, IUpate } from "../../components/typings";

export const addTodo = (payload: ITodo) => ({ type: ACTION_TYPES.ADD_TODO, payload });
export const toggleTodo = (payload: number) => ({ type: ACTION_TYPES.TOGGLE_TODO, payload });
export const deleteTodo = (payload: number) => ({ type: ACTION_TYPES.DELETE_TODO, payload });
export const updateTodo = (payload: IUpate) => ({ type: ACTION_TYPES.UPDATE_TODO, payload });