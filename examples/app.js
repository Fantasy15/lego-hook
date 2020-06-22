/**
 * @file app.js
 * @description app 入口
 */

import React from 'react';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import routeConfig from './route';


const App = () => {
    return (
        <Router>
            <Switch>
                {routeConfig.map(({key, path, component}) =>
                    <Route key={key} path={path} component={component}></Route>
                )}
            </Switch>
        </Router>
    )
}

export default App;