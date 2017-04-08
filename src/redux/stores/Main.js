import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reduers from '../reducers/Main'

const store = createStore(
    combineReducers(reduers),
    applyMiddleware(thunk), //解决异步，变成同步
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 可以在chrome里调试 redux 代码；
)

export default store;