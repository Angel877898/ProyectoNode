import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/components/FloatButton.css'
import Icon from './Icon';  

const FloatButton = ({img, onClick}) => {
    return (
        <>
        <button 
            className={'FloatButton'}
            onClick={onClick}
        >
            <Icon src={img} name="Icon" />
        </button>
        </>
    )
}  


FloatButton.propTypes = {
    onClick: PropTypes.func,

}
FloatButton.defaultProps = {
    onClick: () => {},
   
}

export default FloatButton;