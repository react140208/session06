import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "./Task";

interface TaskListStore {
  taskList: Task[];
}

const initialState: TaskListStore = {
  taskList: [
    { id: 1, title: "Task 1", done: true },
    { id: 2, title: "Task 2", done: true },
    { id: 3, title: "Task 3", done: false },
    { id: 4, title: "Task 4", done: false },
    { id: 5, title: "Task 5", done: true },
  ],
};

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.taskList.push({
        id: Math.random(),
        title: action.payload,
        done: false,
      });
    },
    toggle: (state, action: PayloadAction<number>) => {
      const task = state.taskList.find((x) => x.id === action.payload);
      if (task) task.done = !task?.done;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.taskList = state.taskList.filter((x) => x.id !== action.payload);
    },
  },
});

export const { add, toggle, remove } = taskListSlice.actions;
export default taskListSlice.reducer;
