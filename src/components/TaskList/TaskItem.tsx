import { memo, useContext } from "react";
import { Task } from "./Task";
import { AppContext } from "../../appContext";

interface Props {
  toggle: (task: Task) => void;
  remove: (id: number) => void;
  task: Task;
}
// Dumb Component
export function TaskItem({ task, remove, toggle }: Props) {
  const { color } = useContext(AppContext);
  return (
    <li>
      <span style={{ color }}>{task.title}</span>
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

export default memo(TaskItem);
