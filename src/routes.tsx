import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './pages/login';
import Dashboard from './pages/dashboard';
import Karaoke from './pages/karaoke'
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/karaoke" exact component={Karaoke} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;