import React, { useState } from "react";

// TODO: 📝 Joda kardan taskInput

interface Props {
  addTask: (title: string) => void;
}
export default function TaskInput({ addTask }: Props) {
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
