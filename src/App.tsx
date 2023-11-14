import "./App.css";
import PostList from "./components/Post/PostList";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <h1>Task List</h1>
      <TaskList></TaskList>
      <PostList></PostList>
    </>
  );
}

export default App;
