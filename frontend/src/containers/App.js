import React from 'react';
import Button from '../components/Button'
import Icon from '../components/Icon';
import Plus from '../assets/images/plus.svg'
import logOut from '../assets/images/log-out.svg'
import FloatButton from '../components/FloatButton';

const App = () => {
    return (
        <>
        <Button type={'primary'} size={'large'} />
        <Button type={'secundary'} size={'medium'} />
        <Button type={'primary'} size={'medium'} />
        
        <Icon src={logOut} />
        <FloatButton img={Plus} onClick={() => console.log('click')} />
        </>
    )
}

export default App;