// action 命名规则： xxx_action
// reducer 命名规则： xxx_reducer


import Immutable from 'immutable';



const newState = (oldV, newV) => {
    // 等价于  Immutable.Map(newV)
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
            return newState(state, { 'testAction': '经历 action  后变化的值: ' + changeValue })
        default:
            // return state['default'] = '这是默认...' // 错误的写法
            return newState(state, { 'defaultType': '这是默认的reducer值' })
    }
}



export const login_reducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'first_login':
            return state
        case 'isLogin':
            return state.loginState = true;

        case 'notLogin':
            return state.loginState = false;
        default:
            state.loginState = false;
            return state;
    }
}
const dataState = Immutable.fromJS({data: {}, isFetching: false,isTip:false})

export const fetchState = (state=dataState,action={}) =>{
    // state.isFetching = false;
    // state.status = 200;
    switch (action.type) {
        case 'isFetching':
            // return state.set('isFetching',action.status);
            return newState(state,{
                isFetching:action.status != undefined ? action.status : state.isFetching
            })
        case 'success':
            console.log('data:',action.data)
            state = newState(state,{
                status:action.status,
                data:action.data,
                isFetching:false,
                isTip:action.isTip != undefined ? action.isTip : state.isTip
            })
            // state = Object
            // action.isTip ? state.set('isTip',action.isTip): state.set('isTip',false)
            return state;
        case 'exception':
            state = newState(state,{
                status:action.status,
                msg:action.msg,
                isFetching:false,
                isTip:action.isTip != undefined ? action.isTip : true
            })
            return state
        case 'error':
            state = newState(state,{
                status:action.status,
                error:action.error,
                isFetching:false,
                isTip:action.isTip != undefined ? action.isTip : true
            })
            return state
        default:
            state = newState(state,{status:404})
            return state;
    }
}