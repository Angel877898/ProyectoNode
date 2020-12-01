import React, { useContext, useState } from 'react'
import Input from './Input'
import PropTypes from 'prop-types'
import Button from './Button'
import { DataContext } from '../utils/DataContext'
import '../assets/styles/components/Modal.css'
import { postAdd } from '../utils/services/postAdd'

const params = {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Authorization': `bearer ${sessionStorage.getItem('token')}`
    }
}

const Modal = ({ type, history }) => {

    // oculta modal
    const { empId, setShowModalState } = useContext(DataContext)
    const handleShowModal = () => setShowModalState({ showModalState: false })
    
    // borrar empleado
    const delEmp = () => {
        console.log( empId )
        const url = `https://proyecto-final-node.herokuapp.com/empleados/${ empId }`
        fetch(url, params)
            .then(res => res.json())
            .then(data => {
                if(data.code === 200) {
                    setShowModalState({ showModalState: false })
                    history.replace('/empleados')
                }
            })
    }

    
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')

    const handleNombre = ({ target }) => {
        setNombre(target.value)
    }
    const handleApellidos = ({ target }) => {
        setApellidos(target.value)
    }
    const handleTelefono = ({ target }) => {
        setTelefono(target.value)
    }
    const handleDireccion = ({ target }) => {
        setDireccion(target.value)
    }
    const handleCorreo = ({ target }) => {
        setCorreo(target.value)
    }

    let data = {}
    const handleSubmit = (e) => {
        e.preventDefault()
        data = { nombre, apellidos, telefono, correo, direccion}
        if(Object.keys(data).length !== 0) {
            try{
                const add = async () => {
                    const res = await postAdd(data)
                    console.log(res)
                }
                add()
            } 
            catch {
                console.log(e)
            }
        }
        else {
            console.log('hay campos incompletos')
        }
    }

    // actualizar empleado
    const updtEmp = () => {
        // console.log('click actualizar')
    }

    // agregar empleado
    const addEmp = () => {
        // console.log('click nuevo')
    }

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
                                    onClick={ handleShowModal }
                                />
                                <Button 
                                    text='Aceptar'
                                    type='primary'
                                    size='medium'
                                    onClick={ delEmp }
                                />
                            </div>
                       </div>    
                    )
                    : (
                        <>
                            <form onSubmit={ handleSubmit }>
                                <div className='col-3'>
                                    <Input value={ nombre } id='nombre' name='Nombre' onChange={ handleNombre }/>
                                    <Input value={ apellidos } id='apellidos' name='Apellido' onChange={ handleApellidos }/>
                                    <Input value={ telefono } id='telefono' name='Teléfono' onChange={ handleTelefono }/>
                                </div>
                                <div className='col-2'>
                                    <Input value={ direccion } id='direccion' name='Dirección' onChange={ handleDireccion }/>
                                    <Input value={ correo } id='correo' name='Correo' onChange={ handleCorreo }/>
                                </div>
                                <div className='col-buttons'>
                                    <Button 
                                        text='Cancelar'
                                        type='secundary'
                                        size='medium'
                                        onClick={ handleShowModal }
                                    />
                                    {
                                        type.action === 'mod'
                                        ? <Button text='Aceptar' type='primary' size='medium' onClick={ updtEmp } />
                                        : <Button text='Aceptar' type='primary' size='medium' onClick={ addEmp } />
                                    }
                                    
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
