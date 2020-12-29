import React, { useState } from "react";

function ToDoList() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      description: "Learn Java",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: "Setup REST api",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: "Create FE with bill tracking",
      done: false,
      targetDate: new Date(),
    },
  ]);
  const todoList = toDos.map((todo) => {
    return (
      <li>
        {todo.id} - {todo.description} - {todo.done.toString()} - {todo.targetDate.toString()}
      </li>
    );
  });

  return (
    <div>
      <h2>List of To Dos</h2>
      <ul>{todoList}</ul>
    </div>
  );
}

export default ToDoList;
