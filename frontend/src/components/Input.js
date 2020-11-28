import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/Input.css'


const Input = ({ name, type, search, value, onChange }) => {
    // name - nombre input 
    // type - tipo input -> 1:text / 0:password
    // search - input de busqueda -> true

    const [inputValue] =useState('')
    const [passVisibility, setPassVisibility] = useState(true)

    // iconos
    const eyeOn = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A5A2BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={inputValue && 'icon-active'}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    const eyeOff = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A5A2BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={inputValue && 'icon-active'}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A5A2BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={inputValue && 'icon-active'}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>


    
    // hace visible la contrasena
    const handlePasswordVisibility = () => {
        setPassVisibility(!passVisibility)
    }

    return (
        <div className='input-div'>  
            {
                !search
                ? (
                    <>
                        {/* Input texto o contrasena */}
                        <input
                            name={ name.toLowerCase() }
                            value={ value }
                            className={ value && 'input-active' }
                            onChange={ onChange }
                            type={ type ? 'text' : passVisibility ? 'password' : 'text' }
                        />
                        <label 
                            className={ value && 'lbl-active' }
                        >
                            { name }
                        </label>
                        {
                            !type
                            && (
                                <div
                                    className='eye-icon' 
                                    onClick={ handlePasswordVisibility }
                                >
                                    { passVisibility ? eyeOn : eyeOff }
                                </div>
                            )
                        }
                    </>
                )
                : (
                    <>
                        {/* Input busqueda */}
                        <input
                            name={ name.toLowerCase() }
                            value={ value }
                            placeholder='Buscar'
                            className= { `input-search ${ value && 'input-active' } ` }
                            onChange={ onChange }
                            type='text'
                        />
                        <div className='search-icon'>
                            { searchIcon }
                        </div>
                    </>
                )
            }
            
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.bool.isRequired,
    search: PropTypes.bool
}

Input.defaultProps = {
    name: 'Nombre',
    type: true,
    search: false,
}

export default Input
