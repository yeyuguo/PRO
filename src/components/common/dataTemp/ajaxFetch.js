import React from 'react'
import {is,fromJS} from 'immutable'
import fetch from 'isomorphic-fetch'
export {is,fromJS}

// require('antd-mobile/dist/antd-mobile.min.css')

// import {success_action,exception_action,error_action} from '../../../redux/actions/Main'
    

export const Ajax = {
    target:'http://127.0.0.1:8000',
    urls:function(req){
        /*
        req={
            host:'127.0.0.0:8080',
            path:'xx',
            params:{},
            method:'GET'
            fn:fn
        }
        */
        let url
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

        let paths = req.path + paramType(req.params)
        if(req.host){
            url = req.host + paths
        }else{
            url = this.target + paths
        }
        return url
    },
    ajax:function(req,dispatch){
        let requestUrl = {
            host:req.host||this.target,
            path:req.path,
            params:req.params
        }
        let url = this.urls(requestUrl)
        console.log('start request ajax data...')
        fetch(url,{
            method:req.method || 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body:JSON.stringify({'data':json})
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
                // dispatch(error_action(response.status,response.statusText))
            }
            console.log('end request ajax data...')
            // return response.json().then(data =>{data.status == 200 ?dispatch(success_action(data.status, data.data)):dispatch(exception_action(data.status, data.msg))})
            // return response.json().then(data=>{
            //     success_action(data.status, data.data)
            // })
            return response.json();
        })
        .then(req.fn)
        .catch(function(error){
            console.log('ajax error is :',error);
        })
        
    }
}

export const ShouldUpdate = {
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    componentWillUpdate(nextProps, nextState){
        // props 更新时候，才会被调用;
        // 在此处，把 props 里的属性值给设置到 state 里;
        // !is(fromJS(this.props), fromJS(nextProps)) == true
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
}


/*
// 组件装饰器
function flex2(WrapComponent){
    return class PP extends React.Component{
        render(){
            console.log("--- this.props ---->",this.props);
            return (
                <div style={{flex:2}}>
                    <WrapComponent {...this.props}/>
                </div>
            )
        }
    }
}
*/


// export default Ajax;

// 常用函数备注

// 获取 路由参数
// {this.props.params.xxx}
