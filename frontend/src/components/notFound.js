import React from 'react';

import '../assets/styles/components/NotFound.css';
import Button from './Button';

const NotFound = () => {
    return (
        <div className="bg-notFound">
            <h1 title="404 404"> 404 </h1>
            <h2>Parece que estas perdido</h2>
            <Button type='success' text='Volver al Inicio' />
        </div>
    );


}

export default NotFound;

