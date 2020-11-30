export default  function postLogin(data) {
  const API = `https://proyecto-final-node.herokuapp.com/user/login`
  let formBody = [];

  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  formBody = formBody.join("&");
  
  return  fetch( API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formBody
  })
  .then(res => res.json())
  .then(res => {
      console.log(res);
      if(res.code === 401){
        window.alert("Usuario o contraseña incorrecto")
      }
      else{
        if(res.code === 200){
          sessionStorage.setItem('token', res.message)
        }
      }
  })
}   