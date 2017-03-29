import React from 'react'
import {Flex,WhiteSpace,List, InputItem,Button } from 'antd-mobile'
import {Link,browserHistory } from 'react-router'


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
const LoginPage = React.createClass({
    getInitialState(){
        maoboli=require('./backaground')(window);
        const imgNum = maoboli.random()
        // alert(imgNum)
        return{
            // chunkImg:'../../images/mn1.jpg'
            bgSetting:{
                // chunkImg:'../../images/login/login_1.jpg',
                chunkImg:'../../images/login/login_'+imgNum+'.jpg',
                width:'100%',
                height:document.documentElement.clientHeight
            },
            loginState:false
        }
    },
    loginSubmit(){
        this.setState({loginState:true})
        console.log('暂停 2s 测试')
        setTimeout(function(){
            browserHistory.push('/main');
            this.setState({loginState:false})
        }.bind(this),2000)
        // browserHistory.push('/main');
        // this.setState({loginState:false})
    },
    componentWillMount(){
        
    },
    render(){
        const loginState = this.state.loginState
        const bgImgState = this.state.bgSetting
        return (
            <div className="login">
                <Flex>
                    <FItem>
                        <div id="box" style={{width: bgImgState.width,height:bgImgState.height}} data-image-src={bgImgState.chunkImg}></div>
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
                        <Button onClick={this.loginSubmit} className='login-btn' type="primary" inline size="large" onClick={this.loginSubmit} activeStyle={{backgroundColor:'red'}}>{loginState?'正在登录...':'登录'}</Button>
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

export default LoginPage