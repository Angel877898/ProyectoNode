import React from 'react';
import PropTypes from 'prop-types'

import '../assets/styles/components/Icon.css'

const Icon = ({src, onClick,name}) => {
    return (
        <>
        <img src={src} onClick={onClick} alt={name} className="icon" />
        </>
    )
}  

Icon.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string,
    name:PropTypes.string
   
}
Icon.defaultProps = {
    src: '../assets/images/plus.svg',
    onClick: () => {},
    name: 'Icon'
    
}

export default Icon;