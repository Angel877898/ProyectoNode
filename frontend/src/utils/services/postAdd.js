export const postAdd = (data) => {
    const url = 'https://proyecto-final-node.herokuapp.com/empleados/'
    let formData = []
    for(let property in data){
        let encodedKey = encodeURIComponent(property)
        let encodedValue = encodeURIComponent(data[property])
        formData.push(encodedKey + "=" + encodedValue)
    }
    formData = formData.join("&");
    return fetch(url, {
        method: 'POST',
        mode:'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `bearer ${sessionStorage.getItem('token')}`,
        },
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
}