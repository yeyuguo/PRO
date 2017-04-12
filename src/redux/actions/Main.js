// action 命名规则： xxx_action
// reducer 命名规则： xxx_reducer
import fetch from 'isomorphic-fetch'

function paramType(data){
    let paramArr = []; 
    let paramStr = ''; 
    for (let attr in data) {
        paramArr.push(attr + '=' + data[attr]);
    }
    paramStr = paramArr.join('&');
    paramStr = '?' + paramStr;
    return paramStr
}

// const target = 'http://127.0.0.1:9999'
const target = 'http://127.0.0.1:8000'

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
const success_action=(statue,data,isTip)=>{
    return {
        type:'success',
        statue,
        data,
        isTip
    }
}

const exception_action =(statue,msg,isTip)=>{
    return {
        type:'exception',
        statue,
        msg,
        isTip
    }
}


export const fetchPosts = (path, params) => {
    let url = target + path + paramType(params);
    // let url = target + path
    console.log({url})
    return dispatch => {
        dispatch(isFetching_action(true));
        return fetch(url,{
            mode: 'cors',
            "Content-Type": "application/json",
        })
        .then(response => {
            if (response.status == 200) {
                response.json().then(data => dispatch(success_action(200, data)))
            } else {
                response.json().then(msg => dispatch(exception_action(201, msg)))
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(`获取数据异常 --> ${error}`))
    }
}