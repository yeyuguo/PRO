// action 命名规则： xxx_action
// reducer 命名规则： xxx_reducer


import Immutable from 'immutable';


const newObj = (oldV, newV) => {
    return Object.assign({}, oldV, newV)
}

// console.log({ testAction })
export const testReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'testAction':
            // console.log('reducer testAction.testValue:', testAction)
            console.log('testAction action is :', action)
            var changeValue = action.testValue.sort();
            // const newOjb = Object.assign({}, state, { testAction: (testAction) => { return testAction.testVal.sort() } })
            // const newOjb = Object.assign({}, state, { 'testAction': '经历 action  后变化的值' + changeValue })
            return newObj(state, { 'testAction': '经历 action  后变化的值: ' + changeValue })
        default:
            // return state['default'] = '这是默认...' // 错误的写法
            return newObj(state, { 'defaultType': '这是默认的reducer值' })
    }
}



export const login = (state = {}, action = {}) => {
    switch (action.type) {
        case 'first_login':
            state
        case 'isLogin':
            state.loginState = true;

        case 'notLogin':
            state.loginState = false;
        default:
            state.loginState = false;
            return state;
    }
}