import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import { injectGlobal } from 'styled-components';

const App = () => (

    <Router>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Router>

);

injectGlobal`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }
`;

export default App;