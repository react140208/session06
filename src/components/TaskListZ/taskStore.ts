import { create } from "zustand";
import { Task } from "./Task";

interface Store {
  taskList: Task[];
  add: (title: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

export const useTaskListStore = create<Store>()((set) => ({
  taskList: [
    { id: 1, title: "Task 1", done: true },
    { id: 2, title: "Task 2", done: true },
    { id: 3, title: "Task 3", done: false },
    { id: 4, title: "Task 4", done: false },
    { id: 5, title: "Task 5", done: true },
  ],
  add: (title: string) =>
    set((state) => ({
      taskList: [
        ...state.taskList,
        {
          id: Math.random(),
          title,
          done: false,
        },
      ],
    })),
  remove: (id: number) =>
    set((state) => ({ taskList: state.taskList.filter((x) => x.id !== id) })),
  toggle: (id: number) =>
    set((state) => {
      const taskList = state.taskList.concat();
      const task = taskList.find((x) => x.id == id);
      if (task) task.done = !task.done;
      return { taskList };
    }),
}));
