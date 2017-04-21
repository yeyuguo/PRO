import React from 'react'
require('antd-mobile/dist/antd-mobile.min.css')
require('./loading.less')


const Loading = React.createClass({
    getInitialState(){
        return {}
    },
    // shouldComponentUpdate(nextProps, nextState) {
    //     return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    // },
    componentWillUpdate(nextProps, nextState){
        // props 更新时候，才会被调用;
        // 在此处，把 props 里的属性值给设置到 state 里;
        // return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        if(nextProps == this.props){
            return false
        }
    },
    render(){
        // console.log('loading props:',this.props)
        // console.log('loading state:',this.state)
        return (
            <div className='loading' style={{height:this.props.height,display:this.props.isFetching?'block':'none'}}>
                {/*
                */}
                <div className="tipMsg">
                    {this.props.isFetching?'正在加载...':'数据加载完成'}
                </div>
                <div className="firefly">
                    <div className="head"></div>
                    <div className="wing left"></div>
                    <div className="wing right"></div>
                    <div className="glow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        )
    }
})


export default Loading;

// 常用函数备注

// 获取 路由参数
// {this.props.params.xxx}
