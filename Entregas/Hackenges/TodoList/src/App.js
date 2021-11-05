import { useState } from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id : 1,
      text : 'Doctor Appointment',
      date : '5th feb 2010 2:40pm',
      reminder : true
    },
    {
      id : 2,
      text : 'Gym',
      date : '5th feb 2010 4:30pm',
      reminder : true
    },
    {
      id : 3,
      text : 'School Appointment',
      date : '5th feb 2010 6:40pm',
      reminder : true
    }
  ]);

  const onDelete = (id) => {
    setTask(tasks.filter((task)=>task.id !== id));
  }

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task));
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
