import { useState } from "react";
import "./App.css";
import PostIndex from "./pages/Post/PostIndex";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <PostIndex></PostIndex>}

      <h1>Task List</h1>
      <TaskList></TaskList>
    </>
  );
}

export default App;
