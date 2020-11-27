import React from 'react';

import '../assets/styles/components/Login.css';
import Button from './Button';
import Input from '../components/Input';

const NotFound = () => {
    return (
        <div className="bg-login">
            <div className="side-banner">
                <h2>Taller de Node</h2>
                <h3>S.A. de C.V.</h3>
            </div>
            <div className='right-container'>
                <div className='login-container'>
                    <h3>Inicia sesion</h3>
                    <Input name='Correo'  size={'large'}   />
                    <Input name='Contraseña' size={'large'}  />
                    {/* TODO checkbox */}<p>*TO DO Checkbox*</p>
                    <Button type="primary" size="large" text='Iniciar Sesion' />
                </div>
            </div>
        
        </div>
    );


}

export default NotFound;