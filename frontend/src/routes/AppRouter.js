import React from 'react'
import Login from '../containers/Login'
import Main from '../containers/Main'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Login }/>
                <Route exact path='/empleados' component={ Main }/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    )
}

export default AppRouter
