import React from 'react'
import {Flex,WhiteSpace,List, InputItem,Button } from 'antd-mobile'
import {Link,browserHistory } from 'react-router'
import { is, fromJS} from 'immutable';
// <<<--------->>>
import {connect} from 'react-redux'
import {testAction} from '../../redux/actions/Main'


require('antd-mobile/dist/antd-mobile.min.css')
require('./login.less')
const FItem = Flex.Item
const LineSpace = ()=>{
    return (
        <div className='lineSpace'>
        </div>
    )
}
var maoboli
let countNum = 0;
const LoginPage = React.createClass({
    getInitialState(){
        maoboli=require('./backaground')(window);
        const imgNum = maoboli.random()
        // alert(imgNum)
        return{
            // chunkImg:'../../images/mn1.jpg'
            // bgSetting:{
            //     // chunkImg:'../../images/login/login_1.jpg',
            //     chunkImg:'../../images/login/login_'+imgNum+'.jpg',
            //     height:document.documentElement.clientHeight
            // },
            imgNum,
            loginState:false
        }
    },
    loginSubmit(){
        // this.setState({loginState:true})
        // console.log('暂停 2s 测试')
        // setTimeout(function(){
        //     browserHistory.push('/main');
        //     this.setState({loginState:false})
        // }.bind(this),2000)

    },
    componentWillMount(){
        // test redux
        // this.props.testAction()
         // 仅仅执行 reducer里定义的方法
        console.log('this.props.store:',this.props.store);
        console.log('yes')
        console.log('this.props:',this.props)
        console.log('this.context:',this.context)
        console.log('this.context key:',Object.keys(this.context))

    },
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    render(){
        countNum+=1
        console.log('重新渲染第 '+(countNum) +' 次')
        const loginState = this.state.loginState
        const bgImgState = {
            chunkImg:'../../images/login/login_'+this.state.imgNum+'.jpg',
            height:document.documentElement.clientHeight
        }
        // 从 props 里获取到 action 的内容，react 和 action 没有任何关系，靠对象来建立联系
        const testClickAction = this.props.testClickAction


        return (
            <div className="login">
                <Flex>
                    <FItem>
                        <div id="box" style={{width: '100%',height:bgImgState.height}} data-image-src={bgImgState.chunkImg}></div>
                    </FItem>
                </Flex>
                <div className="login_content">
                    <List renderHeader={() => '登录界面'}>
                        <InputItem
                            clear
                            placeholder="邮箱或手机号"
                            autoFocus
                            labelNumber='3'
                            className='loginInput upLine'
                            extra='用户名不对'
                            error
                        >
                            <div className='login-username' style={{ backgroundImage: 'url(../../images/icon/用户.svg)'}} />
                            用户名
                            
                        </InputItem>
                        <InputItem
                            clear
                            type="password"
                            labelNumber='3'
                            placeholder="请输入密码"
                            className='loginInput bottomLine'
                        >
                            <div className='login-password' style={{ backgroundImage: 'url(../../images/icon/密码.svg)'}} />
                            密　码
                        </InputItem>
                        {/*<Button onClick={this.loginSubmit} className='login-btn' type="primary" inline size="large" activeStyle={{backgroundColor:'red'}}>{loginState?'正在登录...':'登录'}</Button>*/}
                        <Button onClick={testClickAction} className='login-btn' type="primary" inline size="large" activeStyle={{backgroundColor:'red'}}>{loginState?'正在登录...':'登录'}</Button>
                        <div></div>
                        <Link to='/login/forget'>密码忘记?</Link>
                        <div></div>
                        <Link to='/register'>账户注册?</Link>
                    </List>
                </div>
            </div>
            
        )
    },
    componentDidMount(){
        // 毛玻璃触发的效果
        // 由于require 有缓存，否则会出现第二次require不加载该文件
        // require('./backaground')(window);
        // window.initWindow(document.getElementById('box'));
        maoboli.initWindow(document.getElementById('box'));
    },
    componentDidUpdate(){
        
    }
})

// connect 里的内容全部都放到了 props 里
/*
个人理解：
mapStateToProps 把combineReducer合并的 reducers, 返回 state 合并对象放到了props里
mapDispatchToProps 把 actions 合并的 对象放到 props 里
*/
const result = connect(
//  mapStateToProps
(state)=>{
    let { testReducer } = state  // 默认已经在 combineReducer 把所有的reducer 合并成一个 state 了
    console.log('connect state:',state)
    return{
        // state,
        testReducer // reducer 默认的state
    }
},
//  mapDispatchToProps
(dispatch)=>{
    return{
        testClickAction:()=>dispatch(testAction([4,3,2,1])) // 触发更新reducer的state 
    }
})(LoginPage)
export default result;


// export default LoginPage