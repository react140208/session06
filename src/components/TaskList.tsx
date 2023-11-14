//Snippet
//rfc
import React, { useState } from "react";

export default function TaskList() {
  const [taskList, setTaskList] = useState([
    { id: 1, title: "Task 1", done: true },
    { id: 2, title: "Task 2", done: true },
    { id: 3, title: "Task 3", done: false },
    { id: 4, title: "Task 4", done: false },
    { id: 5, title: "Task 5", done: true },
  ]);

  const addTask = () => {
    // 🐞 taskList.push({ id: Math.random(), title: "Task New", done: false });

    //Method 1
    // const newTaskList = taskList.concat();
    // newTaskList.push({ id: Math.random(), title: "Task New", done: false });

    //Method 2
    // const newTaskList = taskList.slice();
    // newTaskList.push({ id: Math.random(), title: "Task New", done: false });

    /**
     * arr1 = [1,2,3]
     * arr2 = [1,2,3,   4]
     * arr2 = [...arr1, 4]
     */
    //Method 3
    // const newTaskList = [...taskList]; //spread operator // es2015+
    // newTaskList.push({ id: Math.random(), title: "Task New", done: false });
    const newTaskList = [
      ...taskList,
      { id: Math.random(), title: "Task New", done: false },
    ];
    setTaskList(newTaskList);
  };

  return (
    <>
      <button onClick={addTask}>➕</button>
      <ul>
        {taskList.map((t) => (
          <li key={t.id}>
            {t.title} - {t.done ? "✅" : "🟩"}
          </li>
        ))}
      </ul>
    </>
  );
}
