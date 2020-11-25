import React from 'react';
import PropTypes from 'prop-types'

import '../assets/styles/components/Input.css'

const Input = ({placeholder, value, size, onChange}) => {
    return (
        <>
        <input 
            type="text"
            className={`input 
                ${size === 'medium' ? "input-medium" : "input-large"}`}
            onChange={onChange}
            placeholder={placeholder}
        />
        </>
    )
}  
const options={
    sizes:['medium','large']
}

Input.propTypes = {
    onChange: PropTypes.func,
    size: PropTypes.oneOf(options.sizes),
    value: PropTypes.string,
    placeholder: PropTypes.string
}
Input.defaultProps = {
    size: 'large',
    onChange: () => {},
    
    placeholder: 'Default'
}

export default Input;