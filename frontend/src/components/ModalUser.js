import React from 'react'
import '../assets/styles/components/ModalUser.css'
import Button from './Button'

const ModalUser = ({ type }) => {
    return (
        <div className='modal-bg'>
            <div className={'modal-container large'}>
                <h2>Datos del Usuario</h2>
                    <div>
                        <div className="modal-container-data bold">
                            <p>Angel Uriel Hernandez Maldonado</p>
                        </div>
                        <div className="modal-container-data">
                            <p>4871266303</p>
                        </div>
                        <div className="modal-container-data">
                        <p>Av de las ciencias #154 juriquilla, colonia rancho largo, mexico, queretaro jejeje </p>
                        </div>
                        <div className="modal-container-data">
                            <p>angurie_2008@hotmail.com</p>
                        </div>
                        <div className='col-buttons'>
                            <Button size="large" type="primary" text="Acpetar" />
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}



export default ModalUser
