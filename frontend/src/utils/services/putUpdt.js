export const putUpdt = async( data, id ) => {
    const url = `https://proyecto-final-node.herokuapp.com/empleados/${id}`
    const res = await fetch( url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
    return res.json()
}