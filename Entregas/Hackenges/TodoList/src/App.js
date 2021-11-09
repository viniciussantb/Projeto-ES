import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTask] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/todo", {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setTask(data)
    })
    .catch((err) => console.log(err));
  }, []);

  const onDelete = (id) => {
    setTask(tasks.filter((task)=>task._id !== id));
  }

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task._id === id ? {...task, reminder : !task.reminder} : task));
  }

  const addTask = (task) => {
    
    const id = Math.floor(Math.random()*1000+1);
    const newTask = {id, ...task};
    setTask([...tasks, newTask]);
  }

  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <Header showAddTask={toggleShowAddTask} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
