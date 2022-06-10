export interface ITodo {
  id: number;
  content: string;
  done: boolean;
}

export enum ACTION_TYPES {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO
}

export interface IState {
  todoList: ITodo[]
}

export interface IAction {
  type: ACTION_TYPES;
  payload: ITodo | number | IUpate
}

export interface IUpate {
  id: number;
  content: string;
}

// export enum IFilterState {
//   ALL_TODO,
//   ACTIVE_TODO,
//   COMPLETED_TODO
// }