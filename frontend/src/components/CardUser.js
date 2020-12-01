import React, { useContext } from 'react'
import Icon from './Icon'
import Edit from '../assets/images/edit.svg'
import Delete from '../assets/images/delete.svg'
import { DataContext } from '../utils/DataContext'
import '../assets/styles/components/CardUser.css'

const CardUser = ({ empId, name, tel, email, address }) => {
    // estado de modal
    const { setShowModalState} = useContext(DataContext)
    // modal para eliminar
    const handleShowDelModal = ( id, name ) => {
        setShowModalState({
            showModalState: true,
            modalType: {
                action: 'del',
                message: `¿Eliminar empleado ${ name }?`
            }, 
            empId: id
        })
    }
    // modal para editar
    const handleShowModModal = ( id, name ) => setShowModalState({
        showModalState: true,
        modalType: {
            action: 'mod',
            message: `Modificar empleado ${ name }`
        },
         empId: id
    })

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
                <Icon 
                    src={ Edit } 
                    onClick={ () => handleShowModModal( empId, name ) }    
                />
                <Icon 
                    src={ Delete }
                    onClick={ () => handleShowDelModal( empId, name ) }    
                />
            </div>
        </div>
    )
}

export default CardUser;
