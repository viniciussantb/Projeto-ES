import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [title, setText] = useState('');
    const [description, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!title){
            alert('Please add a task');
            return
        }else if(!description){
            alert('Please add a date');
            return
        }

        onAdd({title, description, reminder});

        setDate('');
        setReminder(false);
        setText('');
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={title} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and time</label>
                <input type='text' placeholder='Add Day and Time' value={description} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
