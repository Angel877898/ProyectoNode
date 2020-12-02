import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/RequestStatusSnackbar.css'
import { DataContext } from '../utils/DataContext'

const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

const RequestStatusSnackbar = ({ status, message }) => {

    const { setSnackbarState } = useContext(DataContext)

    return (
        <div className={`snackbar ${ status }`}>
            <p>{ message }</p>
            <span onClick={() => setSnackbarState({snackbarState: false})}>
                { closeIcon }
            </span>
        </div>
    )
}

RequestStatusSnackbar.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

RequestStatusSnackbar.defaultProps = {
    // status: 'loading', // success - fail
    // status: 'success',
    status: 'fail',
    message: 'Cargando...'
}

export default RequestStatusSnackbar
