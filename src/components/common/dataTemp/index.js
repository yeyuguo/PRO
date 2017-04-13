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
                this.props.fetchPosts(this.props.templateProps.path,this.props.templateProps.params);
            }
        }
    })
    // TempComp.defaultProps = {template}

    return connect(state=>{
        console.log('template reducer state:',state)
        return state
    },action)(TempComp);   
}


export default Temp;


