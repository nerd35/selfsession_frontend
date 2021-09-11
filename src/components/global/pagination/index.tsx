import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../../styles/pagination.css";

interface Iprops {
  total: number;
  callback: (num: number) => void
}

const Pagination: React.FC<Iprops> = ({ total, callback }) => {
  const [page, setPage] = useState(0);

  const newArr = [...Array(total)].map((_, i) => i + 1);
  const history = useHistory()

  const isActive = (index: number) => {
    if (index === page) return "active";
    return ""
  }

  const handlePagination = (num: number) => {
    history.push(`?page=${num}`)
    setPage(num)
    callback(num)
  }

  useEffect(() => {
    const num = history.location.search.slice(6) || 1
    setPage(Number(num))
  },[history.location.search])
  return (
    <div className="py-2 text-center cursor-pointer pagination-section" style={{cursor: 'pointer'}}>
      {page > 1 && (
        <div onClick={() => handlePagination(page - 1)}>
        <span style={{ textDecoration: "none" }}  >
          <span className="px-3 py-2 pagination-list me-2" aria-hidden="true">
            &laquo;
          </span>
          </span>
          </div>
      )}
      {newArr.map((num) => (
        <div key={num} className={`page-back ${isActive(num)}`}
        onClick={() => handlePagination(num)}>
        <span  style={{ textDecoration: "none" }} >
          <span className="px-3 py-2 pagination-list me-2">{num}</span>
          </span>
          </div>
      ))}
      {page < total && (
        <div onClick={() => handlePagination(page + 1)}>
        <span style={{ textDecoration: "none" }}  >
          <span className="px-3 py-2 pagination-list me-2" aria-hidden="true">
            &raquo;
          </span>
          </span>
          </div>
      )}
    </div>
  );
};

export default Pagination;
