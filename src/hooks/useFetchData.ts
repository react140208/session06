import { useState, useEffect } from "react";

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //Promise
    //Async
    // fetch(
    //   `https://jsonplaceholder.ir/${endpoint}?_limit=${pageSize}&_page=${page}`
    // )
    //   .then((resp) => {
    //     const x = resp.headers.get("X-Total-Count") || "0";
    //     setTotal(+x);
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //     setLoading(false);
    //   });

    setLoading(true);
    // const loadData = async () => {
    //   //Async/Await
    //   const resp = await fetch(
    //     `https://jsonplaceholder.ir/${endpoint}?_limit=${pageSize}&_page=${page}`
    //   );
    //   const x = resp.headers.get("X-Total-Count") || "0";
    //   setTotal(+x);
    //   const data = await resp.json();
    //   setData(data);
    //   setLoading(false);
    // };
    // loadData();

    //IIFE - Immediately Invoked Function Expression
    (async () => {
      //Async/Await
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}?_limit=${pageSize}&_page=${page}`
      );
      const x = resp.headers.get("X-Total-Count") || "0";
      setTotal(+x);
      const data = await resp.json();
      setData(data);
      setLoading(false);
    })();

    return () => {
      console.log("goodby! 👋");
    };
  }, [endpoint, page, pageSize]);

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
