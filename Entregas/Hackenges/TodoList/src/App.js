import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [userEmail, setUserEmail] = useState('');
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
      setUserEmail(data[0].userEmail);
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

    const {title, description, reminder} = task;
    const todoModel = {
      title: title,
      reminder: reminder,
      description: description,
      userEmail: userEmail
    }

    fetch('http://localhost:8080/todo', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body : JSON.stringify(todoModel)
    }).then((res)=>res.json())
      .then((data)=>{
        const newTask = data;
        setTask([...tasks, newTask]);
        console.log(tasks);
      });
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
