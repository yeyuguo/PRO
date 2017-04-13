import React from 'react'
import {is,fromJS} from 'immutable'
import { connect } from 'react-redux';
import * as action from '../../../redux/actions/Main';


const Temp = (tempObj)=> {
    let templateProps = {
        url:'',  // 路由的地址
        path:'', // 请求 API 的地址
        params:{}, //　请求 API 的参数
        component:<div></div>, // 组件名称
    }
    
    templateProps = Object.assign({},templateProps,tempObj)


    // class TempComp extends React.Component{
    //     static defaultProps = { templateProps }
    //     constructor(props,context){
    //         super(props,context);
    //     }
    //     render(){
    //         console.log('templateProps props:',this.props)
    //         return <this.props.templateProps.component {...this.props} />  
    //     }
    //     shouldComponentUpdate(nextProps, nextState) {
    //         return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    //     }
    // }

    // return connect(state=>{
    //     return state
    // },action)(TempComp);

    const TempComp = React.createClass({
        getDefaultProps(){
            return {
                templateProps
            }
        },
        shouldComponentUpdate(nextProps, nextState) {
            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        },
        render(){
            console.log('templateProps props:',this.props)
            return <this.props.templateProps.component {...this.props}  state={this.props.state}/>
        },
        componentDidMount() {//获取数据
            if (this.props.templateProps.path) {
                this.props.fetchAction(this.props.templateProps.path,this.props.templateProps.params);
            }
        }
    })
    // TempComp.defaultProps = {template}

    return connect(state=>{   
        console.log('template reducer state:',state)
        return state   // 包含所有export的 reducer 的state
    },
    action   //包含所有export的 action 
    )(TempComp);   
}


export default Temp;


/*
如何使用

export default Temp({
    url:'/register',   // app 的路由
    path:'/api/xxxx',  // API 的路由,此处的api不能漏掉。否则就会报错
    params:{},  // API 的参数
    component:Register // 组件的名称
})


*/


