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

export interface IUpdate {
  id: number;
  content: string;
}

export interface IAction {
  type: ACTION_TYPES,
  payload: ITodo | number | IUpdate
}

// export enum IFilterState {
//   ALL_TODO,
//   ACTIVE_TODO,
//   COMPLETED_TODO
// }