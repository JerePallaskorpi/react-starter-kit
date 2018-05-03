// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import HomeContainer from '../../containers/HomeContainer';
import * as styles from '../ui/defaultStyles';

const App = ({ store }: any) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={HomeContainer} />
            </Switch>
        </Router>
    </Provider>
);

injectGlobal`
  body {
    margin: 0;
    font-family: 'Lato', Arial, sans-serif;
    font-size: 16px;
    background: ${styles.colorBackgroundLightGray};
    color: ${styles.colorFontDark};
    
    input, select, textarea, button {
        font-family: inherit;
    }
    
    *::-moz-selection { background: ${styles.colorMain}; }
    *::selection { background: ${styles.colorMain}; }
  }
`;

export default App;
