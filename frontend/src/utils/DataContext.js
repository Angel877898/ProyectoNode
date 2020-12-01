import React, { createContext, useState } from 'react'


export const DataContext = createContext()


export const DataProvider = ({ children }) => {
    // estado modal
    const [{showModalState, modalType, empId}, setShowModalState] = useState({ showModalState: false, modalType: { action: '', message: '' }, empId: null })
    
    return (
        <DataContext.Provider value={{ showModalState, modalType, empId, setShowModalState }}>
            { children }
        </DataContext.Provider>
    )
}