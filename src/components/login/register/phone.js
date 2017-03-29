import React from 'react'
import {List,InputItem,Button} from 'antd-mobile'
import {Link} from 'react-router'

const Phone = React.createClass({
    getInitialState(){
        return{
            registerState:false,
            isEqual:false
        }
    },
    render(){
        const registerState = this.state.registerState
        const isEqual = this.state.isEqual
        return (
            <div className="email">
                <List renderHeader={() => '手机注册'}>
                    <InputItem
                        clear
                        placeholder="手机号"
                        autoFocus
                        labelNumber='3'
                        className='registerInput upLine'
                        extra='格式不对'
                        error
                    >
                        <div className='register-username' style={{ backgroundImage: 'url(../../images/icon/手机.svg)'}} />
                        手机号
                    </InputItem>
                    <InputItem
                        clear
                        type="password"
                        labelNumber='3'
                        placeholder="输入6位短信验证码"
                        className='registerInput bottomLine'
                    >
                        <div className='register-password' style={{ backgroundImage: 'url(../../images/icon/密码.svg)'}} />
                        验证码
                    </InputItem>
                    <Button onClick={this.registerSubmit} className='register-btn' type="primary" inline size="large" activeStyle={{backgroundColor:'red'}}>{registerState?'正在注册...':'注册'}</Button>
                    <div className="lineSpace"></div>
                    <Link to='/register/email'>邮箱注册?</Link>
                    <div></div>
                    <Link to='/login'>已有账号?</Link>
                </List>
            </div>
        )
    }
})


export default Phone;