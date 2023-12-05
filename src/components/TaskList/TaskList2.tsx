import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import MetaHeader from "../MetaHeader";
import { useAppSelector } from "../../redux/hooks";

//Dumb Component
export default function TaskList() {
  const taskList = useAppSelector((s) => s.taskList.taskList);
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
