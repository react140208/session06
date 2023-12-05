import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../pages/Counter/Counter.slice";
import TaskListReducer from "../components/TaskList/Task.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    taskList: TaskListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
