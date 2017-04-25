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
const isFetching_action = (status=false)=>{
    return {
        type:'isFetching',
        status
    }
}
export const success_action=(status,data,isTip=false)=>{
    return {
        type:'success',
        status,
        data,
        isTip
    }
}

export const exception_action =(status,msg,isTip=true)=>{
    return {
        type:'exception',
        status,
        msg,
        isTip
    }
}
export const error_action =(status,error,isTip=false)=>{
    return {
        type:'error',
        status,
        error,
        isTip
    }
}



export const fetchAction = (path, params) => {
    let url = target + path + paramType(params);
    // let url = target + path
    console.log({url})
    return dispatch => {
        dispatch(isFetching_action(true));
        // dispatch(exception_action(202,'test aaaaaa'))
        return fetch(url,{
            mode: 'cors',
            "Content-Type": "application/json",
        })
        .then(response => {
            // 该处如果设置了后，下面的代码旧获取不到 data 值了
            // response.json().then(data=>console.log('得到数据的第一步：',data))
            console.log('API 状态信息 response :',response)
            // 服务器自动返回的状态信息
            if (response.status == 200) {
                // 自己定义的API数据里的状态信息
                response.json().then(data =>{data.status == 200 ?dispatch(success_action(data.status, data.data)):dispatch(exception_action(data.status, data.msg))})
                
            } else {
                // 服务器自动获取的API错误状态
                dispatch(error_action(response.status,response.statusText))
                console.log("error status", response.status);
            }
        })
        .catch(error => console.log(`获取数据异常 --> ${error}`))
    }
}


