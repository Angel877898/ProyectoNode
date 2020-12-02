import React, {useState} from 'react';
import isEmail from '../utils/verify/isEmail'
import Button from '../components/Button';
import Input from '../components/Input';
import postLogin from '../utils/services/postLogin';
import '../assets/styles/containers/Login.css';


const Login = ({ history }) => {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    const handleCorreo=(e) => {
        setCorreo(e.target.value)
    }
    const handlePass=(e) => {
        setPassword(e.target.value)
    }


    const handleLogin = (e) =>{
        e.preventDefault()
        const esCorreo= isEmail(correo)
        if(!correo || !password){
            window.alert("1 o mas campos vacios")
        }else{
            if(esCorreo){
                const data={
                    email: correo,
                    password: password
                }
                try{
                    const login = async () => {
                        const status= await postLogin(data)
                        if(status){
                            window.location.href = '/empleados'
                        }
                    }
                    login()
                    
                }catch(e){
                    console.error(e);
                }
                
            }else{
                window.alert("Correo invalido")
            }
        }
        
        
    }

    return (
        <div className="bg-login">
            <div className="side-banner">
                <h2>Taller de Node</h2>
                <h3>S.A. de C.V.</h3>
            </div>
            <div className='right-container'>
            <form onSubmit={handleLogin} >
                    <div className='login-container'>
                        
                        <h3>Inicia sesion</h3>
                        <Input 
                            name='Correo'  
                            size={'large'} 
                            value={correo}
                            onChange={handleCorreo}
                        />
                        <Input 
                            name='Contraseña' 
                            size={'large'} 
                            value={password}
                            type={ false }
                            onChange={handlePass}
                        />
                        {/* TODO checkbox<p>*TO DO Checkbox*</p> */}
                        <Button type="primary" size="large" text='Iniciar Sesion' />
                    
                    </div>
                </form>
            </div>
        </div>
    );


}

export default Login;