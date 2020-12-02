import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import CardHeader from '../components/CardHeader'
import CardUser from '../components/CardUser'
import Button from '../components/Button'
import Modal from '../components/Modal'
import useFetch from '../utils/services/useFetch'
import { DataContext } from '../utils/DataContext'
import '../assets/styles/containers/Main.css'
import Loading from '../components/Loading'
import RequestStatusSnackbar from '../components/RequestStatusSnackbar'

const Main = ({ history }) => {
    
    // input de busqueda
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = ({ target }) => setSearchValue(target.value)
    const searching = (searchValue) => (emp) => emp.nombre.toLowerCase().includes(searchValue) || !searchValue

    // peticion get empleados
    const { loading, data } = useFetch('https://proyecto-final-node.herokuapp.com/empleados')

    // estado de modal en context
    const { showModalState, modalType, setShowModalState} = useContext(DataContext)

    // funcion para renderizar modal / modaType determina que modal sale
    const handleShowAddModal = () => setShowModalState({
        showModalState: true,
        modalType: {
            action: 'add',
            message: 'Nuevo empleado'
        }
    })
    
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
                            ? <Loading />
                            : (
                                data.filter( searching(searchValue) ).map((emp) => (
                                    <CardUser 
                                        key={ emp.id }
                                        empId={ emp.id }
                                        name={ emp.nombre }
                                        lastname={ emp.apellidos }
                                        tel={ emp.telefono }
                                        email={ emp.correo }
                                        address={ emp.direccion }
                                    />
                                ))     
                            )
                        }
                        {/* <Loading /> */}
                    </div>
                    <Button 
                        text='Nuevo empleado'
                        onClick={ handleShowAddModal }
                    />
                </div>                
            </div>
            { showModalState && <Modal type={ modalType } history={ history }/>}
            {/* <RequestStatusSnackbar /> */}
        </>
    )
}

export default Main
