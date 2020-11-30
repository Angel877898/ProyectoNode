import React from 'react';
import Button from '../components/Button';
import '../assets/styles/containers/NotFound.css';

const NotFound = () => {
    return (
        <div className="bg-notFound">
            <h1 className="notFound-title" title="404 404"> 404 </h1>
            <h2 className="notFound-subtitle">Parece que estas perdido</h2>
            <Button type='success' text='Volver al Inicio' />
        </div>
    );


}

export default NotFound;

