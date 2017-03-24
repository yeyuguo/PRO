import React from 'react'
import {List} from 'antd-mobile'
const Item = List.Item;

require('antd-mobile/dist/antd-mobile.css')
// 此处再次引入 antd-mobile.css 是为了解决 antd-mobile 会在最后加载的情况
require('./friendMsg.less')

const FriendMsg = React.createClass({
    getInitialState(){
        return {
            defaultAvator:'../../images/yeoman.png',
            // 倒着渲染
            users:[
                {
                    avator:'../../images/mn1.jpg',
                    userName:'玲玲',
                    userID:'001',
                    msgInfo:{
                        latestModify:'2017-03-17 14:30:25',
                        latestMsg:'你好，很高兴认识你！'
                    },
                    isRead:false                
                },
                {
                    avator:'../../images/mn2.jpg',
                    userName:'玲玲',
                    userID:'001',
                    msgInfo:{
                        latestModify:'2017-03-17 13:30:25',
                        latestMsg:'你好，很高兴认识你！你好，很高兴认识你！你好，很高兴认识你！'
                    },
                    isRead:false                
                },
                {
                    avator:'../../images/mn3.jpg',
                    userName:'玲玲',
                    userID:'001',
                    msgInfo:{
                        latestModify:'星期三',
                        latestMsg:'你好，很高兴认识你！'
                    },
                    isRead:true                
                }
            ]
        };
    },
    chatWindow(){
        alert(0)
    },
    render(){
        var data = this.state.users[0]
        
        return (
            <List renderHeader={() => ''} style={{'height':this.props.height}} className="friendMsg-list">
                {this.state.users.map(function(item,index){
                    const data = item
                    console.log({data})
                    return (
                        <Item onClick={this.chatWindow} key={index} style={{}}>
                            <div className='friendMsg'>
                                <img src={data.avator ? data.avator : this.state.defaultAvator} alt=""/>
                                <div className="friendMsg-content">
                                    <p>
                                        <span className="userName">{data.userName}</span>
                                        <span className='latestTime'>{
                                            data.msgInfo.latestModify.split(' ').length>1?data.msgInfo.latestModify.split(' ')[1].substr(0,5):data.msgInfo.latestModify
                                            /*
                                            if(data.msgInfo.latestModify.split(' ').length>1){
                                                return data.msgInfo.latestModify.split(' ')[1].substr(0,5)
                                            }
                                            else{
                                                return data.msgInfo.latestModify
                                            }
                                            */
                                        }</span>
                                    </p>
                                    <p className="latestMsg">{data.msgInfo.latestMsg}</p>
                                </div>
                            </div>
                        </Item>
                        
                    )
                }.bind(this))}        
            </List>
        )
    }
})

export default FriendMsg