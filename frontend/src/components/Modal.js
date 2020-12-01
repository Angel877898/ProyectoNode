import React, { useContext, useState } from 'react'
import Input from './Input'
import PropTypes from 'prop-types'
import Button from './Button'
import { DataContext } from '../utils/DataContext'
import { postAdd } from '../utils/services/postAdd'
import { putUpdt } from '../utils/services/putUpdt'
import '../assets/styles/components/Modal.css'
import ModalUser from './ModalUser'

const params = {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Authorization': `bearer ${sessionStorage.getItem('token')}`
    }
}

const Modal = ({ type, history }) => {

    // oculta modal
    const { empId, name, lastname, tel, email, address, setShowModalState } = useContext(DataContext)
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

    
    const [nombre, setNombre] = useState(type.action==='mod' ? `${name}` : '')
    const [apellidos, setApellidos] = useState(type.action==='mod' ? `${lastname}` : '')
    const [telefono, setTelefono] = useState(type.action==='mod' ? `${tel}` : '')
    const [direccion, setDireccion] = useState(type.action==='mod' ? `${address}` : '')
    const [correo, setCorreo] = useState(type.action==='mod' ? `${email}` : '')

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

    let datos = {}
    const handleSubmit = (e) => {
        e.preventDefault()
        datos = { nombre, apellidos, telefono, correo, direccion}
        if(type.action === 'add'){
            postAdd(datos)
            .then(res => {
                if(res.code === 500) {
                    res.campos.map((campo) => console.log(`${campo.campo} invalido`))
                }
                if(res.code === 201) {
                    console.log(res.code)
                    console.log(res.message)
                    setShowModalState({ showModalState: false })
                    history.replace('/empleados')
                }

            })
            .catch(err => console.log(err))    
        }
        else if(type.action === 'mod') {
            putUpdt(datos, empId)
            .then(res => {
                if(res.code === 500) {
                    res.campos.map((campo) => console.log(`${campo.campo} invalido`))
                }
                if(res.code === 200) {
                    console.log(res.code)
                    console.log(res.message)
                    setShowModalState({ showModalState: false })
                    history.replace('/empleados')
                }

            })
            .catch(err => console.log(err))    
        }
    }

    return (
        <div className='modal-bg'>
            {
                type.action === 'user'
                ? <ModalUser />
                : (
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
                                            <Button text='Aceptar' type='primary' size='medium'/>
                                        </div>
                                    </form>
                                </>
                            )
                        }
                    </div>
                )
            }
            
        </div>
    )
}

Modal.propTypes = {
    type: PropTypes.object.isRequired
}

export default Modal
