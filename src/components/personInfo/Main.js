import React from 'react'

require('./personInfo.less')
require('antd-mobile/dist/antd-mobile.min.css')
// 获取 路由参数
// {this.props.params.paramName}
const PersonPage = React.createClass({
    getInitialState(){
        return {
            test:true,
            personInfo:{
                bgImg:'../../images/mn2.jpg',

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
                        马玲玲 o | 21
                    </div>
                    <div className="descript">
                        中间文字描述
                    </div>
                </div>
                <div className="person-footer">
                    <ul>
                        <li className='f1'>更多信息</li>
                        <li className='f2'>相片</li>
                        <li className='f3'>关注的人</li>
                        <li className='f4'>发送信息</li>
                    </ul>
                </div>         
            </div>
        )
    }
})


export default PersonPage;