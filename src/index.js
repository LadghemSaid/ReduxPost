import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./style/style.scss"

//Redux part
import {Provider} from 'react-redux'
import {applyMiddleware, compose,createStore} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'
import Routes from "./routes";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
