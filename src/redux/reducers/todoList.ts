import { ACTION_TYPES, IAction, ITodo, IUpate } from "../../components/typings";

const initTodoList: ITodo[] = JSON.parse(localStorage.getItem("state") || "{}").todoList || [];

export default function todoListReducer(todoList = initTodoList, action: IAction): ITodo[] {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.ADD_TODO:
      return [...todoList, payload as ITodo];
    case ACTION_TYPES.TOGGLE_TODO:
      return todoList.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done;
        }
        return todo;
      });
    case ACTION_TYPES.DELETE_TODO:
      return todoList.filter(todo => todo.id !== payload);
    case ACTION_TYPES.UPDATE_TODO: {
      const { id, content } = payload as IUpate;
      return todoList.map(todo => {
        if (todo.id === id) {
          todo.content = content;
        }
        return todo;
      });
    }
    default:
      return initTodoList;
  }
}