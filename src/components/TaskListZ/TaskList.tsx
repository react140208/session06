import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import MetaHeader from "../MetaHeader";
import { useTaskListStore } from "./taskStore";

//Dumb Component
export default function TaskList() {
  const { taskList } = useTaskListStore();
  return (
    <>
      <MetaHeader title="Task List" desc="my tasks"></MetaHeader>
      <TaskInput></TaskInput>
      <ul>
        {taskList.map((t) => (
          <TaskItem key={t.id} task={t}></TaskItem>
        ))}
      </ul>
    </>
  );
}
