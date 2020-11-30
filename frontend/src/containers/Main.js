import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import CardHeader from '../components/CardHeader'
import CardUser from '../components/CardUser'
import Button from '../components/Button'
import Modal from '../components/Modal'
import useFetch from '../utils/services/useFetch'
import '../assets/styles/containers/Main.css'

const Main = ({ history }) => {
    const [{showModalState, modalType}, setShowModalState] = useState({ showModalState: false, modalType: { action: '', message: '' } })

    const [searchValue, setSearchValue] = useState('')
    
    const handleSearch = ({ target }) => {
        setSearchValue(target.value)
    }

    const { loading, data } = useFetch('https://proyecto-final-node.herokuapp.com/empleados')

    // funcion para renderizar modal / modaType determina que modal sale
    const handleShowAddModal = () => {
        setShowModalState({
            showModalState: true,
            modalType: {
                // tipo de modal
                action: 'add',
                // titulo de modal
                message: 'Nuevo empleado'
            }
        })
    }

    const searching = ( searchValue ) => {
        return function(x){
            return x.nombre.toLowerCase().includes(searchValue) || !searchValue
        }
    }
    // const handleShowDelModal = () => {
    //     setShowModalState({
    //         showModalState: true,
    //         modalType: {
    //             action: 'del',
    //             message: '¿Eliminar empleado?'
    //         }
    //     })
    // } 
    // const handleShowModModal = () => {
    //     setShowModalState({
    //         showModalState: true,
    //         modalType: {
    //             action: 'mod',
    //             message: 'Modificar empleado'
    //         }
    //     })
    // } 

    return (
        <>
            <NavBar history={ history }/>
            <div className='content'>
                <Sidebar />
                <div className='main-content'>
                    <div className='title-searchbar'>
                        <h1>Empleados</h1>
                        <Input 
                            name='Buscar' 
                            search={ true }
                            value={ searchValue }
                            onChange={ handleSearch }
                        />
                    </div>
                    <CardHeader />
                    <div className='employees'>
                        {
                            loading
                            ? <h1>Cargando...</h1>
                            : (
                                data.filter(searching(searchValue)).map((emp) => (
                                    <CardUser 
                                        key={ emp.id }
                                        name={ `${emp.nombre} ${emp.apellidos}` }
                                        tel={ emp.telefono }
                                        email={ emp.correo }
                                        address={ emp.direccion }
                                    />
                                ))
                                    
                            )
                        }
                    </div>
                    <Button 
                        text='Nuevo empleado'
                        onClick={ handleShowAddModal }
                    />
                </div>                
            </div>
            { showModalState && <Modal type={ modalType }/>}
        </>
    )
}

export default Main
