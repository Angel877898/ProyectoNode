import React from 'react'
import Login from '../containers/Login'
import Main from '../containers/Main'
import NotFound from '../containers/NotFound'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const AppRouter = () => {
    // lee session storage para ver si hay token
    const isAuth = sessionStorage.getItem('token') ? true : false
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Login }/>
                <PrivateRoute exact path='/empleados' component={ Main } isAuth={ isAuth }/>
                <Route component={ NotFound }/>
            </Switch>
        </Router>
    )
}

export default AppRouter
