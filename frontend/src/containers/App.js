import React, { useState } from 'react';
import Button from '../components/Button'
import Icon from '../components/Icon';
import Plus from '../assets/images/plus.svg'
import logOut from '../assets/images/log-out.svg'
import FloatButton from '../components/FloatButton';
import NavBar from '../components/NavBar';
import '../assets/styles/containers/App.css'
import Input from '../components/Input';
import CardUser from '../components/CardUser';

const App = () => {
    
    return (
        <>
   
        <NavBar/>
        <Button type={'primary'} size={'large'} />
        <Button type={'secundary'} size={'medium'} />
        <Button type={'primary'} size={'medium'}  text="Modal1" />
        <Button type={'primary'} size={'medium'}  text="Modal2" />
        <Input size={'large'}  />
        <Icon src={logOut} />
        <FloatButton img={Plus} onClick={() => console.log('click')} />
        <CardUser tel="4871266303" name="Angel Uriel Hernandez Maldonadosadkhfjhfksasdasddsd" address="Boulevard Juriquilla 345 col jahsjhajhd" email="angurie_2008@hotmail.com" />
        </>
    )
}

export default App;