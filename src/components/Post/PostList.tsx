import React, { useEffect, useState } from "react";

/*
    Ajax: 
        - $.ajax -> axios
        - fetch
        - xhr

    CSS:
       bootstrap
    
    Ant Design
*/
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export default function PostList() {
  // useEffect(() => {}, [])
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.ir/posts")
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  const [data, setData] = useState<Post[] | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.ir/posts?_limit=10&_page=${page}`)
      .then((resp) => {
        const x = resp.headers.get("X-Total-Count") || "0";
        setTotal(+x);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
    return () => {
      console.log("goodby! 👋");
    };
  }, [page]);

  return (
    <>
      {!data && <h1>Loading...</h1>}
      {data && (
        <>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(1)}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(2)}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" onClick={() => setPage(3)}>
                3
              </a>
            </li>
          </ul>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id}>
                  <th scope="row">{d.id}</th>
                  <td>{d.userId}</td>
                  <td>{d.title}</td>
                  <td>{d.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
