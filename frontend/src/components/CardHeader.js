import React from 'react'
import '../assets/styles/components/CardHeader.css'

const CardHeader = () => {
    return (
        <div className="cardHeader">
            <div className="cardHeader__name ">
                <p>Nombre</p>
            </div>
            <div className="cardHeader__tel">
                <p>Cel.</p>
            </div>
            <div className="cardHeader__email">
                <p>Correo</p>
            </div>
            <div className="cardHeader__address">
                <p>Dirección</p>
            </div>
            <div className="cardHeader__icons">
            </div>
        </div>
    )
}

export default CardHeader;