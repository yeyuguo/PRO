import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reduers from '../reducers/index'

// reduers 是一个对象集合
const store = createStore(
    combineReducers(reduers),
    applyMiddleware(thunk), //解决异步，变成同步
    // 调试 redux
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 可以在chrome里调试 redux 代码；
)

export default store;