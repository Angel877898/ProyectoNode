import React from 'react'
import Login from '../containers/Login'
import Main from '../containers/Main'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

const AppRouter = () => {
    // lee session storage para ver si hay token
    const isAuth = sessionStorage.getItem('token') ? true : false
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Login }/>
                <PrivateRoute exact path='/empleados' component={ Main } isAuth={ isAuth }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}

export default AppRouter
