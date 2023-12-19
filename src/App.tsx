import { Suspense, lazy, useState } from "react";
import "./App.css";
import { AppContext } from "./appContext";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const TodoIndex = lazy(() => import("./pages/Todo/TodoIndex"));
const PhotoIndex = lazy(() => import("./pages/Photo/PhotoIndex"));
const PhotoDetail = lazy(() => import("./pages/Photo/PhotoDetail"));
const PostIndex = lazy(() => import("./pages/Post/PostIndex"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const TaskList = lazy(() => import("./components/TaskList/TaskList"));
const TaskListZustand = lazy(() => import("./components/TaskListZ/TaskList"));
const CounterIndex = lazy(() => import("./pages/Counter/CounterIndex"));
const CounterZustand = lazy(() => import("./pages/Counter/CounterZustand"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthLayout from "./components/AuthLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "task",
        element: (
          <Suspense fallback="...">
            <TaskList></TaskList>
          </Suspense>
        ),
      },
      {
        path: "taskz",
        element: (
          <Suspense fallback="...">
            <TaskListZustand></TaskListZustand>
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
            <ProtectedRoute>
              <PhotoIndex></PhotoIndex>
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "photo/:id",
        element: (
          <Suspense>
            <PhotoDetail></PhotoDetail>
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
      {
        path: "counter",
        element: (
          <Suspense>
            <CounterIndex></CounterIndex>
          </Suspense>
        ),
      },
      {
        path: "counter-zustand",
        element: (
          <Suspense>
            <CounterZustand></CounterZustand>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback="...">
            <Login></Login>
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback="...">
            <Register></Register>
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
      <Provider store={store}>
        <HelmetProvider>
          <AppContext.Provider value={{ color, setColor }}>
            <RouterProvider router={router} />
          </AppContext.Provider>
        </HelmetProvider>
      </Provider>
    </div>
  );
}

export default App;
