import React from "react";

/*
    Ajax: 
        - $.ajax -> axios
        - fetch
        - xhr
*/

export default function PostList() {
  fetch("https://jsonplaceholder.ir/posts")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });

  return <div>PostList</div>;
}
