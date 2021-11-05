import React from 'react'
import Button from './Button'

export const Header = ({ showAddTask, showAdd }) => {

    return (
        <header className='header'>
            <h1>To do List</h1>
            <Button title={showAdd ? 'Close' : 'Add' } color ={showAdd ? 'red' : 'green'} onClick={showAddTask}/>
        </header>
    )
}
