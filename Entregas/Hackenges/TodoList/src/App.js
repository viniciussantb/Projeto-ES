import { useState } from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

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

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
