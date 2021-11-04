import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, color, onClick}) => {
    return (
        <>
            <button 
                className='btn' 
                style= {{backgroundColor: color}}
                onClick= {onClick}
            >
                {title}
            </button>
        </>
    )
}

Button.defaultProps = {
    title : 'red'
}

Button.propTypes = {
    title : PropTypes.string,
    color : PropTypes.string.isRequired,
    onClick : PropTypes.func
}

export default Button
