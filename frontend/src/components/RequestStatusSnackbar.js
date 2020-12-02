import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/RequestStatusSnackbar.css'

const RequestStatusSnackbar = ({ status, message }) => {
    return (
        <div className={`snackbar ${ status }`}>
            <p>{ message }</p>
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
