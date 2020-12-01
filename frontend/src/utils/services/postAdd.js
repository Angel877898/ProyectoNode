export const postAdd = async( data ) => {
    const url = 'https://proyecto-final-node.herokuapp.com/empleados/'
    const res = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
    return res.json()
}