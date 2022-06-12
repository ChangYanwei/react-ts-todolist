import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./Pagination.less";

interface IProps {
  current: number; // 当前页数
  pageSize: number; // 每页显示条数
  total: number; // 数据总数
  onChange: (page: number, pageSize: number) => void; // 页码改变的回调
  defaultCurrent?: number;
  defaultPageSize?: number;
}

export default function Pagination(props: IProps) {
  const { current, pageSize, total, onChange } = props;
  const pageNum = Math.ceil(total / pageSize);
  const arr = [...Array(pageNum).keys()];
  const [currentNum, setCurrentNum] = useState(current);

  const handleChangeNum = (page: number) => {
    setCurrentNum(page);
    onChange(page, pageSize);
  };

  useEffect(() => {
    setCurrentNum(current);
  }, [current]);

  return (
    <ul className="pagination">
      {arr.map(item => (
        <li
          key={item}
          className={classNames("pagination-item", {
            "pagination-item-active": currentNum === item + 1,
          })}
          onClick={() => handleChangeNum(item + 1)}
        >
          {item + 1}
        </li>
      ))}
    </ul>
  );
}
