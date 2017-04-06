import Immutable from 'immutable';
import { testAction } from '../actions/Main';
// console.log({ testAction })
export const testReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'testAction':
            console.log('reducer testAction.testValue:', testAction)
                // const newOjb = Object.assign({}, state, { testAction: (testAction) => { return testAction.testVal.sort() } })
            const newOjb = Object.assign({}, state, { testAction: '经历 action  后变化的值' })
            return newOjb
        default:
            return state['default'] = '这是默认的 reducer 值'
    }
}