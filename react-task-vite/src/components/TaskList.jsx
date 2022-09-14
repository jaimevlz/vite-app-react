import React from "react";
import { tasks as data } from "../data/tasks";
import { useState, useEffect, useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text text-4xl font-bold text-center">No hay tareas aún</h1>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
    );
  }
}

export default TaskList;
