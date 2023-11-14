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

  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.ir/posts")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
    return () => {
      console.log("goodby! 👋");
    };
  }, []);

  return (
    <>
      <h1>Post List {data.length}</h1>
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
            <tr>
              <th scope="row">{d.id}</th>
              <td>{d.userId}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
