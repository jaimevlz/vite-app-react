import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle, taskDescription){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: taskDescription
    }])
  }
  
  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;

//  ul>li*4>a{enlace $} donde $ funciona como counter, * funciona como cant
//
{
  /* <ul>
<li><a href="">Enlace 1</a></li>
<li><a href="">Enlace 2</a></li>
<li><a href="">Enlace 3</a></li>
<li><a href="">Enlace 4</a></li>
</ul> */
}
