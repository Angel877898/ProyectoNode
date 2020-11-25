import React from 'react'
import Icon from './Icon'
import Edit from '../assets/images/edit.svg'

import '../assets/styles/components/CardHeader.css'

const CardHeader = () => {
    return (
        <div className="cardHeader">
            <div className="cardHeader__name ">
                <p>Nombre</p>
            </div>
            <div className="cardHeader__tel">
                <p>Teléfono</p>
            </div>
            <div className="cardHeader__email">
                <p>Correo</p>
            </div>
            <div className="cardHeader__address">
                <p>Dirección</p>
            </div>
            <div className="cardHeader__icons">
                <Icon src={Edit} />
                <Icon src={Edit} />
            </div>
        </div>
    )
}

export default CardHeader;