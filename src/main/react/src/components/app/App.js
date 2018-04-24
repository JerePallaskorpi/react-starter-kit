import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import { injectGlobal } from 'styled-components';
import * as styles from '../../utils/defaultStyles';

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
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    background: ${styles.colorBackgroundLightGray};
  }
  
`;

export default App;
