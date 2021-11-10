import { useState, useEffect, useContext } from "react";
import { Header } from "../components/Header";
import Tasks from "../components/Task/Tasks";
import AddTask from "../components/Task/AddTask";
import { AuthApiContext } from "../context/AuthApiContext";
import { EmailContext } from "../context/EmailContext";
import { useNavigate } from 'react-router-dom';

function App() {
  const {auth} = useContext(AuthApiContext);
  const {email} = useContext(EmailContext);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth){
        navigate('/', {replace: true});
      }
    else{
      fetch("http://localhost:8080/gettodos?email="+email, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({email: email})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      })
      .catch((err) => console.log(err));}
  }, [auth, email, navigate]);

  const onDelete = (id) => {
    fetch("http://localhost:8080/todo", {
      method: "delete",
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({_id: id})
    })
    .then((res)=>res.json())
    .then((data)=> {
      console.log(data);
      setTask(tasks.filter((task)=>task._id !== id));
    })
    .catch((err)=> console.log(err));
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
      userEmail: email
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

  const logout = () => {
    navigate('/', {replace: true});
  }

  return (
    <div className="container">
      <Header showAddTask={toggleShowAddTask} showAdd={showAddTask} logout={logout}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
