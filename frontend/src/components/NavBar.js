import React from 'react'
import Icon from './Icon'
import logOutLogo from '../assets/images/log-out.svg'
import '../assets/styles/components/NavBar.css'

const NavBar = ({ history }) => {
    const handleLogOut = () => {
        sessionStorage.removeItem('token')
        history.replace('/')
    }
    return (
        <header className="header">
            <h1 className="header-titulo">Taller de Node S.A de C.V.</h1>
            <div className="header-icon">
                <Icon className="header-icon" src={logOutLogo} name={'loguot icon'}  onClick={ handleLogOut }/>
            </div>
        </header>
    )
}

export default NavBar