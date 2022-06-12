import { FilterStatus, ITodo, IUpdate } from "../components/typings";
import request from "./request";

// 获取todolist数据
export function reqGetTodoList(page: number, pageSize: number, status: FilterStatus = FilterStatus.ALL) {
  return request({
    url: "/list",
    method: "post",
    data: {
      page,
      pageSize,
      status
    }
  });
}

// 新增todo
export function reqAddTodo(todo: ITodo) {
  return request({
    url: "/add",
    method: "post",
    data: todo
  });
}

// 删除todo
export function reqDeleteTodo(id: number) {
  return request({
    url: "/delete",
    method: "post",
    data: {
      id
    }
  });
}

// 切换todo的状态
export function reqToggleTodo(id: number) {
  return request({
    url: "/toggle",
    method: "post",
    data: {
      id
    }
  });
}

// 编辑更新todo
export function reqUpdateTodo(data: IUpdate) {
  return request({
    url: "/update",
    method: "post",
    data
  });
}