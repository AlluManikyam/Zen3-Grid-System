import React from 'react';
import { Switch, BrowserRouter, Route, } from 'react-router-dom';
import home from './components/grid/Grid';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={home} />
            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;
