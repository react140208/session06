import { Suspense, lazy, useState } from "react";
import "./App.css";
import { AppContext } from "./appContext";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const TodoIndex = lazy(() => import("./pages/Todo/TodoIndex"));
const PhotoIndex = lazy(() => import("./pages/Photo/PhotoIndex"));
const PostIndex = lazy(() => import("./pages/Post/PostIndex"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const TaskList = lazy(() => import("./components/TaskList/TaskList"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "task",
        element: (
          <Suspense>
            <TaskList></TaskList>
          </Suspense>
        ),
      },
      {
        path: "todo",
        element: (
          <Suspense>
            <TodoIndex></TodoIndex>
          </Suspense>
        ),
      },
      {
        path: "photo",
        element: (
          <Suspense>
            <PhotoIndex></PhotoIndex>
          </Suspense>
        ),
      },
      {
        path: "post",
        element: (
          <Suspense>
            <PostIndex></PostIndex>
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  const [color, setColor] = useState("red");
  return (
    <div dir="rtl">
      <HelmetProvider>
        <AppContext.Provider value={{ color, setColor }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </HelmetProvider>
    </div>
  );
}

export default App;
