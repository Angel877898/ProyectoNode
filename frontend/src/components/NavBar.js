import React from 'react'
import Icon from './Icon'
import logOutLogo from '../assets/images/log-out.svg'
import '../assets/styles/components/NavBar.css'

const NavBar = () => {
    return (
        <header className="header">
            <h1 className="header-titulo">Taller de Node S.A de C.V.</h1>
            <div className="header-icon">
                <Icon className="header-icon" src={logOutLogo} name={'loguot icon'} />
            </div>
        </header>
    )
}

export default NavBar