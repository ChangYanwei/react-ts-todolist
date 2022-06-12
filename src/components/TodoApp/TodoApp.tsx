import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoList from "../TodoList/TodoList";
import TodoInfo from "../TodoInfo/TodoInfo";
import "./TodoApp.less";
import { FilterStatus, IState } from "../typings";
import Pagination from "../Pagination/Pagination";
import { reqGetTodoList } from "../../request/todolist";
import { saveTodo } from "../../redux/actions/todoList";

export default function TodoApp() {
  const dispatch = useDispatch();
  const todoList = useSelector(({ todoList }: IState) => todoList);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [activeNum, setActiveNum] = useState(0);
  const [completedNum, setCompletedNum] = useState(0);
  const [status, setStatus] = useState(FilterStatus.ALL);
  const pageSize = 5;

  useEffect(() => {
    const nowStatus = getStatus();
    getData(page, pageSize, nowStatus);
  }, []);

  // 获取当前的状态
  const getStatus = () => {
    let nowStatus = FilterStatus.ALL;
    const pathname = location.pathname;
    if (pathname === "/active") {
      nowStatus = FilterStatus.ACTIVE;
    } else if (pathname === "/completed") {
      nowStatus = FilterStatus.COMPLETED;
    }
    setStatus(nowStatus);
    return nowStatus;
  };

  // 获取数据
  const getData = async (
    page: number,
    pageSize: number,
    status: FilterStatus
  ) => {
    const res = await reqGetTodoList(page, pageSize, status);
    console.log(res);
    const { data, total, page: pageNum, activeNum, completedNum } = res as any;
    setActiveNum(activeNum);
    setCompletedNum(completedNum);
    setPage(pageNum);
    setTotal(total);
    dispatch(saveTodo(data));
  };

  // 当子组件在操作增删改时，调用该函数重新获取数据
  const dataChange = useCallback(
    (pageNum?: number) => {
      pageNum = pageNum === undefined ? page : pageNum;
      getData(pageNum, pageSize, status);
    },
    [page, pageSize, status]
  );

  // 监听页码改变
  const pageChange = useCallback(
    (page: number, pageSize: number) => {
      setPage(page);
      getData(page, pageSize, status);
    },
    [page, pageSize, status]
  );

  // 过滤任务状态
  const statusChange = (status: FilterStatus) => {
    // 切换到新的状态时，从第一页开始
    setPage(1);
    getData(1, pageSize, status);
    setStatus(status);
  };

  return (
    <div className="todo-app">
      <h1 className="todo-app_title">TODOLIST</h1>
      <TodoAdd dataChange={dataChange} />
      <TodoList dataChange={dataChange} />
      <TodoFooter
        statusChange={statusChange}
        activeNum={activeNum}
        completedNum={completedNum}
      />
      {todoList.length > 0 && (
        <Pagination
          current={page}
          pageSize={pageSize}
          total={total}
          onChange={pageChange}
        />
      )}
      <TodoInfo />
    </div>
  );
}
