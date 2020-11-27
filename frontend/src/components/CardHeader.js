import React from 'react'
import Icon from './Icon'
import SortAZ from '../assets/images/sortAZ.svg'
import SortZA from '../assets/images/sortZA.svg'

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
                <Icon src={SortAZ} />
                <Icon src={SortZA} />
            </div>
        </div>
    )
}

export default CardHeader;