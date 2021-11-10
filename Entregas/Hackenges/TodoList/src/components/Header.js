import React from 'react'
import Button from './Button'

export const Header = ({ showAddTask, showAdd, logout }) => {


    return (
        <header className='header'>
            <h1>To do List</h1>
            <Button title={showAdd ? 'Close' : 'Add' } color ={showAdd ? 'red' : 'green'} onClick={showAddTask}/>
            <Button title={'Logout' } color ={'black'} onClick={logout}/>
        </header>
    )
}
