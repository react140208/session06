import React, { useState } from "react";

export default function TaskInput({ addTask }: any) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const add = () => {
    addTask(newTaskTitle);
    setNewTaskTitle("");
  };
  return (
    <>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={add}>➕</button>
    </>
  );
}
