import { useEffect, useState } from 'react'

const headers = {
    headers: {
        'Accept': 'application/json',
        'Authorization': `bearer ${sessionStorage.getItem('token')}`
    }
}

const useFetch = ( url) => {
    const [state, setState] = useState({ data: null, loading: true, error: null })
    useEffect(() => {
        fetch( url, headers)
            .then(res => res.json())
            .then(data => {
                setState({
                    data: data.message !== 'No se encontraron usuarios' ? data.message : [], 
                    loading: false,
                    error: null
                })
            })
    }, [ url ])

    return state
}

export default useFetch
