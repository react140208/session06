import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { add } from "./Task.slice";

// TODO: 📝 Joda kardan taskInput

export default function TaskInput() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const dispatch = useAppDispatch();
  const addTask = () => {
    dispatch(add(newTaskTitle));
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
