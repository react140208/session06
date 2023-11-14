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

export default function PostList() {
  // useEffect(() => {}, [])
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.ir/posts")
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  const [data, setData] = useState([]);
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
      <button className="btn btn-primary">OK</button>
      <ul>
        <li>...</li>
      </ul>
    </>
  );
}
