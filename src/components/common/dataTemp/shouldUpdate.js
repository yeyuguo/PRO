import React from 'react'
import {is,fromJS} from 'immutable'



const ShouldUpdate = {
    ajax(req){
        /*
        req={
            path:'xx',
            params:{},
        }
        */
    },
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


export default ShouldUpdate;

// mixins: [ShouldUpdate],

// 常用函数备注

// 获取 路由参数
// {this.props.params.xxx}
