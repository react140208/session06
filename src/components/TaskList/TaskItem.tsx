import { memo, useContext } from "react";
import { Task } from "./Task";
import { AppContext } from "../../appContext";
import { useAppDispatch } from "../../redux/hooks";
import { remove, toggle } from "./Task.slice";

interface Props {
  task: Task;
}
// Dumb Component
export function TaskItem({ task }: Props) {
  const dispatch = useAppDispatch();
  const { color } = useContext(AppContext);
  return (
    <li>
      <span style={{ color }}>{task.title}</span>
      {/* <input type="checkbox" checked={t.done} onChange={toggle} /> */}
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => dispatch(toggle(task.id))}
      />
      <button
        onClick={() =>
          confirm("are you sure?") ? dispatch(remove(task.id)) : null
        }
      >
        ❌
      </button>
    </li>
  );
}

export default memo(TaskItem);
