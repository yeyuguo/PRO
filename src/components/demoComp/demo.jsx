import React from 'react'
import {is,fromJS} from 'immutable'
require('antd-mobile/dist/antd-mobile.min.css')



const Demo = React.createClass({
    getInitialState(){
        return {
            test:'访问成功!'
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    componentWillUpdate(nextProps, nextState){
        // props 更新时候，才会被调用;
        // 在此处，把 props 里的属性值给设置到 state 里;
        // return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    render(){
        return (
            <div style={{width:'50%',margin:'0 auto'}}>{this.state.test}</div>
        )
    }
})


export default Demo;

// 常用函数备注

// 获取 路由参数
// {this.props.params.xxx}
