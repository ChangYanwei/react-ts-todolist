import { ACTION_TYPES, IAction, ITodo } from "../../components/typings";

const initTodoList: ITodo[] = [];

export default function todoListReducer(todoList = initTodoList, action: IAction): ITodo[] {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SAVE_TODO: {
      return [...payload as ITodo[]];
    }
    default:
      return todoList;
  }
}