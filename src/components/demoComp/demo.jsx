import React from 'react'
require('antd-mobile/dist/antd-mobile.min.css')



const Demo = React.createClass({
    getInitialState(){
        return {
            test:'访问成功!'
        }
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
{this.props.params.xxx}
