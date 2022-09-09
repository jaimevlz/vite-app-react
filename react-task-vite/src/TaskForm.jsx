import React from "react";
import { useState } from "react";
import { tasks } from "./tasks";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu Tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea placeholder="Escribe la descripción de la tarea" onChange={(e) => setDescription(e.target.value)}></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
