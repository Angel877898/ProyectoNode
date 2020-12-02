import React, { createContext, useState } from 'react'


export const DataContext = createContext()


export const DataProvider = ({ children }) => {
    // estado modal
    const [{showModalState, modalType, empId, name, lastname, tel, email, address}, setShowModalState] = useState({ showModalState: false, modalType: { action: '', message: '' }, empId: null })
    const [{snackbarState, status, message}, setSnackbarState] = useState({snackbarState: false, status: '', message:''})
    return (
        <DataContext.Provider value={{ showModalState, modalType, empId, name, lastname, tel, email, address, snackbarState, status, message, setShowModalState, setSnackbarState }}>
            { children }
        </DataContext.Provider>
    )
}