import React from 'react'
import {List} from 'antd-mobile'
const Item = List.Item;
const Brief = Item.Brief;

require('antd-mobile/dist/antd-mobile.css')
// 此处再次引入 antd-mobile.css 是为了解决 antd-mobile 会在最后加载的情况
require('./friendMsg.less')

const FriendMsg = React.createClass({
    getInitialState(){
        var exampleTime = (new Date('2017-03-17 14:30:25'))
        return {
            defaultAvator:'../../images/yeoman.png',
            // 倒着渲染
            users:[
                {
                    avator:'../../images/mn1.jpg',
                    userName:'小玲',
                    userID:'001',
                    msgInfo:[{
                        latestModify:new Date('2017-03-17 14:6:25'),
                        latestMsg:'你好，很高兴认识你！'
                    }],
                    isRead:false                
                },
                {
                    avator:'../../images/mn2.jpg',
                    userName:'马玲',
                    userID:'002',
                    msgInfo:[{
                        latestModify:new Date('2017-03-16 16:30:25'),
                        latestMsg:'你好，很高兴认识你！你好，很高兴认识你！你好，很高兴认识你！'
                    },{
                        latestModify:new Date('2017-03-16 12:30:25'),
                        latestMsg:'你好，很高兴认识你！你好，很高兴认识你！你好，很高兴认识你！'
                    }],
                    isRead:false                
                },
                {
                    avator:'',
                    userName:'玲玲',
                    userID:'003',
                    msgInfo:[{
                        latestModify:new Date('2017-03-15 11:30:25'),
                        latestMsg:'你好，很高兴认识你！'
                    }],
                    isRead:true                
                }
            ]
        };
    },
    chatWindow(){
        alert(0)
    },
    showLatestTime(){
        return 'test'
        return data.msgInfo[data.msgInfo.length-1].latestModify.split(' ').length>1?data.msgInfo[(data.msgInfo.length-1)].latestModify.split(' ')[1].substr(0,5):data.msgInfo[(data.msgInfo.length-1)].latestModify
        
    },
    render(){
        var data = this.state.users[0]
        // 星期 中英文 转换对象
        var en2ch={
            '0':'天',
            '1':'一',
            '2':'二',
            '3':'三',
            '4':'四',
            '5':'五',
            '6':'六'
        }
        return (
            <List renderHeader={() => ''} style={{'height':this.props.height}} className="friendMsg-list">
                {this.state.users.map(function(item,index){
                    const data = item
                    // console.log({data})
                    var time = data.msgInfo[data.msgInfo.length-1].latestModify
                    var nowTime = new Date()
                    const showTime = (time.getTime()<nowTime.getTime())&&(time.getDay()<nowTime.getDay())?`星期${en2ch[time.getDay()]}`:`${time.getHours()}:${time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()}`
                    return (
                        <Item
                        arrow="horizontal"
                        thumb={data.avator ? data.avator : this.state.defaultAvator}
                        multipleLine
                        onClick={this.chatWindow} 
                        key={index}
                        className='friendMsg'
                        extra={showTime}
                        >
                            {data.userName}
                            <Brief>{data.msgInfo[data.msgInfo.length-1].latestMsg}</Brief>
                            {/*
                            extra={(time.getTime()<nowTime.getTime())&&(time.getDay()<nowTime.getDay())?time.getDay():time}
                            <div className='friendMsg'>
                                <img src={data.avator ? data.avator : this.state.defaultAvator} alt=""/>
                                <div className="friendMsg-content">
                                    
                                    <p>
                                        <span className="userName">{data.userName}</span>
                                        <span className='latestTime'>{data.msgInfo[data.msgInfo.length-1].latestModify.split(' ').length>1?data.msgInfo[(data.msgInfo.length-1)].latestModify.split(' ')[1].substr(0,5):data.msgInfo[(data.msgInfo.length-1)].latestModify}</span>
                                    </p>
                                    <p className="latestMsg">{data.msgInfo[data.msgInfo.length-1].latestMsg}</p>
                                </div>
                            </div>
                            */}
                        </Item>
                        
                    )
                }.bind(this))}        
            </List>
        )
    }
})

export default FriendMsg