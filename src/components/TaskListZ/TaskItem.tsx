import { memo, useContext } from "react";
import { Task } from "./Task";
import { AppContext } from "../../appContext";
import { useTaskListStore } from "./taskStore";

interface Props {
  task: Task;
}
// Dumb Component
export function TaskItem({ task }: Props) {
  const { remove } = useTaskListStore();
  const { color } = useContext(AppContext);
  return (
    <li>
      <span style={{ color }}>{task.title}</span>
      {/* <input type="checkbox" checked={t.done} onChange={toggle} /> */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => remove(task.id)}
      />
      <button
        onClick={() => (confirm("are you sure?") ? remove(task.id) : null)}
      >
        ❌
      </button>
    </li>
  );
}

export default memo(TaskItem);
