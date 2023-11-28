import { useState } from "react";
import "./App.css";
import { AppContext } from "./appContext";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./components/TaskList/TaskList";
import TodoIndex from "./pages/Todo/TodoIndex";
import PhotoIndex from "./pages/Photo/PhotoIndex";
import PostIndex from "./pages/Post/PostIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "task",
        element: <TaskList></TaskList>,
      },
      {
        path: "todo",
        element: <TodoIndex></TodoIndex>,
      },
      {
        path: "photo",
        element: <PhotoIndex></PhotoIndex>,
      },
      {
        path: "post",
        element: <PostIndex></PostIndex>,
      },
    ],
  },
]);

function App() {
  const [color, setColor] = useState("red");
  return (
    <div dir="rtl">
      <AppContext.Provider value={{ color, setColor }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
