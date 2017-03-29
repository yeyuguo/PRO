import React from 'react'
import {Flex,WhiteSpace,List, InputItem,Button } from 'antd-mobile'
import {Link} from 'react-router'


require('antd-mobile/dist/antd-mobile.min.css')
require('./login.less')
const FItem = Flex.Item
const LineSpace = ()=>{
    return (
        <div className='lineSpace'>
        </div>
    )
}

const LoginPage = React.createClass({
    getInitialState(){
        return{
            // chunkImg:'../../images/mn1.jpg'
            bgSetting:{
                chunkImg:'../../images/login/chengshi.jpg',
                width:'100%',
                height:document.documentElement.clientHeight
            },
            loginState:false
        }
    },
    loginSubmit(){
        alert(0)
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
                        <div className="lineSpace"></div>
                        <Link to='/login/forget'>密码忘记?</Link>
                    </List>
                </div>
                {this.props.children}
            </div>
        )
    },
    
    componentDidMount(){
        // 毛玻璃触发的效果
        require('./backaground')
    }
})

export default LoginPage