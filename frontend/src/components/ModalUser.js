import React, { useContext } from 'react'
import Button from './Button'
import { DataContext } from '../utils/DataContext'
import '../assets/styles/components/ModalUser.css'

const ModalUser = ( ) => {
    const { name, lastname, tel, email, address, setShowModalState } = useContext(DataContext)
    const handleShowModal = () => setShowModalState({ showModalState: false })
    return (
        <div className={'modal-container large'}>
            <h2>Datos de { name }</h2>
                <div>
                    <div className="modal-container-data bold">
                        <p>{ `${ name } ${ lastname }` }</p>
                    </div>
                    <div className="modal-container-data">
                        <p>{ tel }</p>
                    </div>
                    <div className="modal-container-data">
                    <p>{ address }</p>
                    </div>
                    <div className="modal-container-data">
                        <p>{ email }</p>
                    </div>
                    <div className='col-buttons'>
                        <Button size="large" type="primary" text="Acpetar" onClick={ handleShowModal}/>
                    </div>
                </div>
        </div>
    )
}

export default ModalUser
