import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './pages/login';
import Dashboard from './pages/dashboard';
import Karaoke from './pages/karaoke'
import Musicas from './pages/musicas'
import Pontuacao from './pages/pontuacao'
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/musicas/tendencias" exact component={Musicas} />
                <Route path="/karaoke" exact component={Karaoke} />
                <Route path="/pontuacao" exact component={Pontuacao} />

            </Switch>
        </BrowserRouter>
    );
}
export default Routes;