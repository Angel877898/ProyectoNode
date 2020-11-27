import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import CardHeader from '../components/CardHeader'
import CardUser from '../components/CardUser'
import Button from '../components/Button'
import Modal from '../components/Modal'
import '../assets/styles/containers/Main.css'

const Main = () => {
    const [{showModalState, modalType}, setShowModalState] = useState({ showModalState: false, modalType: { action: '', message: '' } })

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
            <NavBar />
            <div className='content'>
                <Sidebar />
                <div className='main-content'>
                    <div className='title-searchbar'>
                        <h1>Empleados</h1>
                        <Input 
                            name='Buscar' 
                            search={ true }
                        />
                    </div>
                    <CardHeader />
                    <div className='employees'>
                        <CardUser 
                            name='Juan Manuel Alba Castillo'
                            tel='7122352271'
                            email='mac.jmanuel@gmail.com'
                            address='Ignacio Zaragoza, Col. Rancho Largo'
                        />
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
