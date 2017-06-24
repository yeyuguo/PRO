import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/routers/index'; //路由配置
import store from './redux/stores/index'; // store 

ReactDOM.render( 
    <Provider store = { store } >
        { AppRouter } 
    </Provider>,
    document.getElementById('app')
);