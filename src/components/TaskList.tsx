//Snippet
//rfc
import React from "react";

const taskList = [
  { id: 1, title: "Task 1", done: true },
  { id: 2, title: "Task 2", done: true },
  { id: 3, title: "Task 3", done: false },
  { id: 4, title: "Task 4", done: false },
  { id: 5, title: "Task 5", done: true },
];
export default function TaskList() {
  return (
    <>
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
