import React from 'react'
import {Link,browserHistory } from 'react-router'
require('./personInfo.less')
require('antd-mobile/dist/antd-mobile.min.css')
// 获取 路由参数
// {this.props.params.paramName}
const PersonPage = React.createClass({
    getInitialState(){
        return {
            test:true,
            personInfo:{
                bgImg:'../../images/mn1.jpg',

            }
        }
    },
    render(){
        const height = document.documentElement.clientHeight-40
        const personInfo = this.state.personInfo;
        return (
            <div className='person' style={{height:height}}>
                {this.state.test?'访问成功':'访问错误'},路由参数{this.props.params.userId}
                <div className="person-body" style={{backgroundImage:'url('+personInfo.bgImg+')'}}>
                    <div className="simpleDes">
                        <span className="userName">马玲玲</span>
                        <span className="userSex">女</span>
                        <span className="userAge">22</span>
                    </div>
                    <div className="blurBg"></div>
                    <div className='descript'>
                        <div className="f1">
                            <div className="address">
                                <span className="icon"></span>
                                <span className="content">北京</span>
                            </div>
                            <div className="distance">
                                <span className="icon"></span>
                                <span className="content">距离</span>
                            </div>
                        </div>
                        <div className="f2">个人人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述</div>
                        <div className="f3">
                            <span>aaa</span>
                            <span>bbbbbbbbbbbbbbb</span>
                            <span>ccccc</span>
                        </div>
                    </div>
                </div>
                <div className="person-footer">
                    <ul>
                        <li className='f1'><div></div></li>
                        <li className='f2'><div></div></li>
                        <li className='f3'><div></div></li>
                        <li className='f4'><div><Link to='/main'></Link></div></li>
                    </ul>
                </div>         
            </div>
        )
    }
})


export default PersonPage;