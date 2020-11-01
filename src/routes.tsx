import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './pages/login';
import Dashboard from './pages/dashboard';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;