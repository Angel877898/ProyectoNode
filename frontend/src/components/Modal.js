import React from 'react'
import Input from './Input'
import PropTypes from 'prop-types'
import Button from './Button'
import '../assets/styles/components/Modal.css'

const Modal = ({ type }) => {
    return (
        <div className='modal-bg'>
            <div className={ `modal-container  ${type.action === 'del' ? 'm-small' : 'm-large'}` }>
                <h2>{ type.message }</h2>
                {
                    type.action === 'del'
                    ? (
                       <div>
                           <p>¿Estás seguro que deseas eliminar el registro? <br /> Esta acción no se puede revertir</p>
                           <div className='col-buttons'>
                                <Button
                                    text='Cancelar'
                                    type='secundary'
                                    size='medium'
                                />
                                <Button 
                                    text='Aceptar'
                                    type='primary'
                                    size='medium'
                                />
                            </div>
                       </div>    
                    )
                    : (
                        <>
                            <form>
                                <div className='col-3'>
                                    <Input id='name' name='Nombre' type={ true }/>
                                    <Input id='lastname' name='Apellido' type={ true }/>
                                    <Input id='phone' name='Teléfono' type={ true }/>
                                </div>
                                <div className='col-2'>
                                    <Input id='addr' name='Dirección' type={ true }/>
                                    <Input id='email' name='Correo' type={ true }/>
                                </div>
                                <div className='col-buttons'>
                                    <Button 
                                        text='Cancelar'
                                        type='secundary'
                                        size='medium'
                                    />
                                    <Button 
                                        text='Aceptar'
                                        type='primary'
                                        size='medium'
                                    />
                                </div>
                            </form>
                        </>
                    )
                }
            </div>
        </div>
    )
}

Modal.propTypes = {
    type: PropTypes.object.isRequired
}

export default Modal
