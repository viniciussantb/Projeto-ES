import {FaTimes} from 'react-icons/fa'

function Task({ task, onDelete, toggleReminder}) {

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>toggleReminder(task._id)}>
            <h3>{task.title} <FaTimes onClick={()=> onDelete(task._id)}/></h3>
            <p>{task.description}</p>
        </div>
    )
}

export default Task
