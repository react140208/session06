import { memo, useState } from "react";
import { useTaskListStore } from "./taskStore";

// TODO: 📝 Joda kardan taskInput

function TaskInput() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { add } = useTaskListStore();
  const addTask = () => {
    add(newTaskTitle);
    setNewTaskTitle("");
  };
  return (
    <>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={addTask}>➕</button>
    </>
  );
}

export default memo(TaskInput);
