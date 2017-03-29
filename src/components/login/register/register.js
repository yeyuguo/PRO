import React from 'react'
import {Flex,WhiteSpace,List, InputItem,Button } from 'antd-mobile'
import {Link} from 'react-router'

require('antd-mobile/dist/antd-mobile.min.css')
require('./register.less')
const Register = React.createClass({
    getInitialState(){
        return {

        }
    },
    render(){
        return (
            <div className="register">
                
                <Flex>
                    <FItem>
                        <div id="box" style={{width: bgImgState.width,height:bgImgState.height}} data-image-src={bgImgState.chunkImg}></div>
                    </FItem>
                </Flex>
                <div className="register_content">
                    <List renderHeader={() => '登录界面'}>
                        <InputItem
                            clear
                            placeholder="邮箱或手机号"
                            autoFocus
                            labelNumber='3'
                            className='registerInput upLine'
                            extra='用户名不对'
                            error
                        >
                            <div className='register-username' style={{ backgroundImage: 'url(../../images/icon/用户.svg)'}} />
                            用户名
                            
                        </InputItem>
                        <InputItem
                            clear
                            type="password"
                            labelNumber='3'
                            placeholder="请输入密码"
                            className='registerInput bottomLine'
                        >
                            <div className='register-password' style={{ backgroundImage: 'url(../../images/icon/密码.svg)'}} />
                            密　码
                        </InputItem>
                        <Button onClick={this.registerSubmit} className='login-btn' type="primary" inline size="large" onClick={this.loginSubmit} activeStyle={{backgroundColor:'red'}}>{loginState?'正在登录...':'登录'}</Button>
                        <div className="lineSpace"></div>
                        <Link to='/login/forget'>密码忘记?</Link>
                    </List>
                </div>
            </div>
        )
    }
})

export default Register