import React from "react";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function TaskList(props) {
  if (props.tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  } else {
    return (
      <div>
        {props.tasks.map((task) => (
          <TaskCard task = {task} key={task.id}/>
        ))}
      </div>
    );
  }
}

export default TaskList;
