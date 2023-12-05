//Snippet
//rfc
import { useState, useCallback } from "react";
import TaskInput from "../TaskList/TaskInput";
import { Task } from "../TaskList/Task";
import TaskItem from "../TaskList/TaskItem";
import MetaHeader from "../MetaHeader";
import { useAppSelector } from "../../redux/hooks";

//TODO: 📝 Rename task
export default function TaskList() {
  const taskList = useAppSelector((s) => s.taskList.taskList);
  //   //quiz 1
  //   const arr1 = [1, 2, 3];
  //   const arr2 = [1, 2, 3];
  //   console.log("quiz 1", arr1 === arr2);

  //   //quiz 2, lambda
  //   const add1 = (a: number, b: number) => a + b;
  //   const add2 = (a: number, b: number) => a + b;
  //   console.log("quiz 2", add1 === add2);

  // if(1 === 1){
  //   const [x, setX] = useState(true)
  // }

  // const [taskList, setTaskList] = useState<Task[]>([
  //   { id: 1, title: "Task 1", done: true },
  //   { id: 2, title: "Task 2", done: true },
  //   { id: 3, title: "Task 3", done: false },
  //   { id: 4, title: "Task 4", done: false },
  //   { id: 5, title: "Task 5", done: true },
  // ]);

  //Smart Component
  // const addTask = (newTaskTitle: string) => {
  //   // 🐞 taskList.push({ id: Math.random(), title: "Task New", done: false });
  //   // setTaskList(taskList);

  //   //Method 1
  //   // const newTaskList = taskList.concat();
  //   // newTaskList.push({ id: Math.random(), title: "Task New", done: false });

  //   //Method 2
  //   // const newTaskList = taskList.slice();
  //   // newTaskList.push({ id: Math.random(), title: "Task New", done: false });

  //   /**
  //    * arr1 = [1,2,3]
  //    * arr2 = [1,2,3,   4]
  //    * arr2 = [...arr1, 4]
  //    */
  //   //Method 3
  //   // const newTaskList = [...taskList]; //spread operator // es2015+
  //   // newTaskList.push({ id: Math.random(), title: "Task New", done: false });

  //   const newTaskList = [
  //     ...taskList,
  //     { id: Math.random(), title: newTaskTitle, done: false },
  //   ];
  //   setTaskList(newTaskList);
  //   // setNewTaskTitle("");

  //   //Method 4 -. immer
  // };

  //   const [newTaskTitle, setNewTaskTitle] = useState("");

  // const toggle = (task: Task) => {
  //   task.done = !task.done;
  //   setTaskList([...taskList]);
  // };

  // const toggle = useCallback(
  //   (task: Task) => {
  //     task.done = !task.done;
  //     setTaskList([...taskList]);
  //   },
  //   [taskList]
  // );

  // const remove = (id: number) => {
  //   if (confirm("are you sure?"))
  //     setTaskList(taskList.filter((t) => t.id !== id));
  // };

  // const remove = useCallback(
  //   (id: number) => {
  //     if (confirm("are you sure?"))
  //       setTaskList(taskList.filter((t) => t.id !== id));
  //   },
  //   [taskList]
  // );

  return (
    <>
      {/* <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={addTask}>➕</button> */}
      <MetaHeader title="Task List" desc="my tasks"></MetaHeader>
      <TaskInput></TaskInput>
      <ul>
        {taskList.map((t) => (
          //   <li key={t.id}>
          //     {t.title}
          //     {/* <input type="checkbox" checked={t.done} onChange={toggle} /> */}
          //     <input
          //       type="checkbox"
          //       checked={t.done}
          //       onChange={() => toggle(t)}
          //     />
          //     <button onClick={() => remove(t.id)}>❌</button>
          //   </li>
          <TaskItem key={t.id} task={t}></TaskItem>
        ))}
      </ul>
    </>
  );
}
