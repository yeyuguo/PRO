// action 命名规则： xxx_action
// reducer 命名规则： xxx_reducer
import fetch from 'isomorphic-fetch'


const target = '127.0.0.1:6666'

export const testAction = (data) => {
    return {
        type: 'testAction',
        // testValue: [4, 3, 2, 1]
        testValue: data
    }
}



export const login_action = (username, password, pwdIsVisible) => {
    return {
        type: 'login',
        username,
        pwdIsVisible
    }
}


// 请求数据状态,设置true或false 控制请求的状态
// 默认的触发
const isFetching_action = (statue=false)=>{
    return {
        type:'isFetching',
        statue
    }
}
const success_action=(statue,data)=>{
    return {
        type:'success',
        statue,
        data
    }
}

const exception_action =(statue,msg)=>{
    return {
        type:'exception',
        statue,
        msg
    }
}


export const fetchPosts = (path, params) => {
    let url = target + path + Tool.paramType(params);
    return dispatch => {
        dispatch(isFetching_action(true));
        return fetch(url,{
            mode: 'cors',
            "Content-Type": "application/json",
        })
        .then(response => {
            if (response.status == 200) {
                response.json().then(data => dispatch(success_action(statue, data)))
            } else {
                response.json().then(msg => dispatch(exception_action(statue, msg)))
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
    }
}