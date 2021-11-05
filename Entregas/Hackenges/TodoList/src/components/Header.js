import React from 'react'
import Button from './Button'

export const Header = () => {

    const onClick = () => {
        console.log('Hello btn')
    }

    return (
        <header className='header'>
            <h1>To do List</h1>
            <Button title='add' color ='blue' onClick={onClick}/>
        </header>
    )
}
