import { useState } from "react";
import "./App.css";
import PostIndex from "./pages/Post/PostIndex";
import TaskList from "./components/TaskList/TaskList";
import PhotoIndex from "./pages/Photo/PhotoIndex";
import TodoIndex from "./pages/Todo/TodoIndex";
import SelectColor from "./components/SelectColor";
import { AppContext } from "./appContext";

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <AppContext.Provider value={{ color, setColor }}>
      <SelectColor></SelectColor>
      <TaskList></TaskList>
      <TodoIndex></TodoIndex>
      <PhotoIndex></PhotoIndex>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <PostIndex></PostIndex>}

      <h1>Task List</h1>
    </AppContext.Provider>
  );
}

export default App;
