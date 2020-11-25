import React from 'react'
import Icon from './Icon'
import Edit from '../assets/images/edit.svg'
import Delete from '../assets/images/delete.svg'
import '../assets/styles/components/CardUser.css'

const CardUser = ({name, tel, email, address}) => {
    return (
        <div className="cardUser">
            <div className="cardUser__name ">
                <p>{name}</p>
            </div>
            <div className="cardUser__tel">
                <p>{tel}</p>
            </div>
            <div className="cardUser__email">
                <p>{email}</p>
            </div>
            <div className="cardUser__address">
                <p>{address}</p>
            </div>
            <div className="cardUser__icons">
                <Icon src={Edit} />
                <Icon src={Delete} />
            </div>
        </div>
    )
}

export default CardUser;