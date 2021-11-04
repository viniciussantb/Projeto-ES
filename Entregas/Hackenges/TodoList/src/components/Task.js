import {FaTimes} from 'react-icons/fa'

function Task({ task, onDelete }) {

    return (
        <div className='task'>
            <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id)}/></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
