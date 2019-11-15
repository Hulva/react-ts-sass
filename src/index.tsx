import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import HelloContainer from './store/enthusiasm/containers';
import store from './store';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import * as utils from './utils';

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={utils.history}>
            <>
                <Switch>
                    <Route path="/hello" component={HelloContainer} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
