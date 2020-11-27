import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import CardHeader from '../components/CardHeader'
import CardUser from '../components/CardUser'
import Button from '../components/Button'
import '../assets/styles/containers/Main.css'

const Main = () => {
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
                    />
                </div>                
            </div>
        </>
    )
}

export default Main
