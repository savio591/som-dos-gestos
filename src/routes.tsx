import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './pages/login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;