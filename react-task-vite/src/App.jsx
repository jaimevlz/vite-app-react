import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "holi"
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
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
