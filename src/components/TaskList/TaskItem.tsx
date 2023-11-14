import React from "react";
import { Task } from "./Task";

interface Props {
  toggle: (task: Task) => void;
  remove: (id: number) => void;
  task: Task;
}
export default function TaskItem({ task, remove, toggle }: Props) {
  return (
    <li>
      {task.title}
      {/* <input type="checkbox" checked={t.done} onChange={toggle} /> */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggle(task)}
      />
      <button onClick={() => remove(task.id)}>❌</button>
    </li>
  );
}
