import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import About from 'About';
import Weather from 'Weather';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}></IndexRoute>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('app')
);