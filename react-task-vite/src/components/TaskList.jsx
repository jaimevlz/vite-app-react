import React from "react";
import { tasks as data } from "../data/tasks";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function TaskList({tasks, deleteTask}) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  } else {
    return (
      <div>
        {tasks.map((task) => (
          <TaskCard task = {task} key={task.id} deleteTask={deleteTask}/>
        ))}
      </div>
    );
  }
}

export default TaskList;
