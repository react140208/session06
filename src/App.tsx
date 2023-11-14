import { useState } from "react";
import "./App.css";
import PostList from "./components/Post/PostList";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <PostList></PostList>}

      <h1>Task List</h1>
      <TaskList></TaskList>
    </>
  );
}

export default App;
