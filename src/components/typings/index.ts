export interface ITodo {
  id: number;
  content: string;
  done: boolean;
}

export enum ACTION_TYPES {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SAVE_TODO
}

export interface IState {
  todoList: ITodo[]
}

export type IActionPaylod = ITodo | number | IUpdate | ITodo[]

export interface IAction {
  type: ACTION_TYPES;
  payload: IActionPaylod
}

export interface IUpdate {
  id: number;
  content: string;
}

export enum FilterStatus {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed"
}

export interface ICommonProps {
  dataChange(page?: number): void;
}

// export enum IFilterState {
//   ALL_TODO,
//   ACTIVE_TODO,
//   COMPLETED_TODO
// }