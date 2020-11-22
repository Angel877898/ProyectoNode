import React from 'react';
import Button from '../components/Button'
import Icon from '../components/Icon';
import Plus from '../assets/images/plus.svg'
import logOut from '../assets/images/log-out.svg'
import FloatButton from '../components/FloatButton';
import NotFound from '../components/notFound';

const App = () => {
    return (
        <>
        <Button type={'primary'} size={'large'} />
        <Button type={'secundary'} size={'medium'} />
        <Button type={'primary'} size={'medium'} />
        <NotFound />
        
        <Icon src={logOut} />
        <FloatButton img={Plus} onClick={() =>  window.location.href='/notFound.js'} />
        </>
    )
}

export default App;