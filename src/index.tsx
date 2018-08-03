import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Details from "./pages/Details";
import Index from "./pages/Home";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path={'/'} component={Index} exact={true}/>
            <Route path={'/detail/:id'} component={Details} exact={true}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
