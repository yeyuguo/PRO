import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reduers from '../reducers/Main'

const store = createStore(
    combineReducers(reduers),
    applyMiddleware(thunk) //解决异步，变成同步
)

export default store;