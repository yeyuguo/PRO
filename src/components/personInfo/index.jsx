import React from 'react'
import {Link,browserHistory } from 'react-router'
import Temp from '../common/dataTemp/index'
import {Ajax,ShouldUpdate} from '../common/dataTemp/ajaxFetch'
require('./personInfo.less')
require('antd-mobile/dist/antd-mobile.min.css')
// 获取 路由参数
// {this.props.params.paramName}
const PersonPage = React.createClass({
    mixins:[Ajax,ShouldUpdate],
    getInitialState(){
        return {
            test:true,
            personInfo:{
                bgImg:'../../images/mn1.jpg',
            }
        }
    },
    request(){
        this.ajax({
            path:'/api/personal/getUser',
            params:this.props.params,
            fn:function(data){
                if(data.status==200){
                    console.log('personal ajax data:',data.data)
                    this.setState({
                        data:data.data
                    })
                }
            }.bind(this)
        })
    },
    render(){
        this.request()
        // const height = document.documentElement.clientHeight-40
        
        const personInfo = this.state.personInfo;
        if(!this.state.data){
            return (
                <div>没有数据</div>
            )
        }
        var obj = this.state.data
        // alert(obj)
        return (
            <div className='person' >
                {this.state.test?'访问成功':'访问错误'},路由参数{this.props.params.userId}
                <div className="person-body" style={{backgroundImage:'url('+obj.defaultPhoto+')'}}>
                    <div className="simpleDes">
                        <span className="userName">{obj.nickName}</span>
                        <span className="userSex">女</span>
                        <span className="userAge">{obj.age}</span>
                    </div>
                    <div className="blurBg"></div>
                    <div className='descript'>
                        <div className="f1">
                            <div className="address">
                                <span className="icon"></span>
                                <span className="content">{obj.workCity}</span>
                            </div>
                            <div className="distance">
                                <span className="icon"></span>
                                <span className="content">{obj.lastLoginT}</span>
                            </div>
                        </div>
                        <div className="f2">{obj.introduceContent}</div>
                        <div className="f3">
                            <span>读书</span>
                            <span>爬山</span>
                            <span>运动</span>
                        </div>
                    </div>
                </div>
                <div className="person-footer">
                    <ul>
                        <li className='f1'><div><Link to='/' /></div></li>
                        <li className='f2'><div><Link to='/' /></div></li>
                        <li className='f3'><div><Link to='/' /></div></li>
                        <li className='f4'><div><Link to='/main/friendMsg' /></div></li>
                    </ul>
                </div>         
            </div>
        )
    }
})

export default Temp({
    url:'/personal/uid',   // app 的路由
    // path:'/api/personal/getUser',  // API 的路由,此处的api不能漏掉。否则就会报错
    // params:{
    //     uid:{this.props.params.userId}||'99270279'
    // },  // API 的参数
    component:PersonPage // 组件的名称
})

// export default PersonPage;