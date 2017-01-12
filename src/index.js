import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';




// import App from './components/Main';
// ReactDOM.render(<App />, document.getElementById('app'));

// import TabMain from './components/TabMain-comp'
// ReactDOM.render(<TabMain />, document.getElementById('app'));

import AppRouter from './routers/Main'
// 此处不是组件 是路由对象
ReactDOM.render(AppRouter, document.getElementById('app'));
