import React from 'react';
import PropTypes from 'prop-types'

import '../assets/styles/components/Button.css'

const Button = ({type, size, text, onClick}) => {
    return (
        <>
        <button 
            className={`button 
                ${type === 'primary' ? "primary" : "secundary"} 
                ${size === 'medium' ? "medium" : "large"}`}
            onClick={onClick}
        >
        {text}
        </button>
        </>
    )
}  
const options={
    types:['primary', 'secundary'],
    sizes:['medium','large']
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(options.types),
    size: PropTypes.oneOf(options.sizes),
    text: PropTypes.string
}
Button.defaultProps = {
    type: 'primary',
    size: 'large',
    onClick: () => {},
    text: 'default'
}

export default Button;