import { useState, useEffect } from "react";

export const useFetchData = <T>() => {
  const [data, setData] = useState<T[] | null>(null);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.ir/posts?_limit=${pageSize}&_page=${page}`)
      .then((resp) => {
        const x = resp.headers.get("X-Total-Count") || "0";
        setTotal(+x);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
    return () => {
      console.log("goodby! 👋");
    };
  }, [page, pageSize]);

  return {
    data,
    setData,
    total,
    setTotal,
    page,
    setPage,
    pageSize,
    setPageSize,
    loading,
    setLoading,
  };
};
