import React from 'react'
import { List } from 'antd-mobile'
import { Link, browserHistory } from 'react-router'
import {is,fromJS} from 'immutable'
import Temp from '../common/dataTemp/index'

const Item = List.Item;
const Brief = Item.Brief;

require('antd-mobile/dist/antd-mobile.css')
    // 此处再次引入 antd-mobile.css 是为了解决 antd-mobile 会在最后加载的情况
require('./friendMsg.less')

const FriendMsg = React.createClass({
    getInitialState() {
        var exampleTime = (new Date('2017-03-17 14:30:25'))
        return {}
    },
    chatWindow() {
        browserHistory.push('/personal/5');
    },
    showLatestTime() {
        return 'test'
        return data.msgInfo[data.msgInfo.length - 1].latestModify.split(' ').length > 1 ? data.msgInfo[(data.msgInfo.length - 1)].latestModify.split(' ')[1].substr(0, 5) : data.msgInfo[(data.msgInfo.length - 1)].latestModify

    },
    componentDidMount(){
        // console.log('赋值开始')
        // this.setState({
        //     defaultAvator:this.props.fetchState,
        //     users:this.props.fetchState.users
        // })
    },
    render() {
        // var data = this.state.users[0]
        // var aa = this.props.fetchState.data
        // console.log('friendMsg props:',this.props)
        // console.log({aa})
        // console.log(aa.users)
        // console.log('test obj',userDatas.users)
        var userDatas = this.props.fetchState.data
        console.log({userDatas})
            // 星期 中英文 转换对象
        var en2ch = {
            '0': '天',
            '1': '一',
            '2': '二',
            '3': '三',
            '4': '四',
            '5': '五',
            '6': '六'
        }
        return ( 
            <List 
                renderHeader = {() => ''}
                style = {{ 'height': this.props.height }}
                className = "friendMsg-list" 
            > 
                
                
            {
                !userDatas ? false :userDatas.users.map(function(item, index) {
                    const data = item
                        // console.log({data})
                    var time = data.msgInfo[data.msgInfo.length - 1].latestModify
                    var nowTime = new Date()
                    const showTime = (time.getTime() < nowTime.getTime()) && (time.getDay() < nowTime.getDay()) ? `星期${en2ch[time.getDay()]}` : `${time.getHours()}:${time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()}`
                    return ( 
                        <Item arrow = "horizontal"
                            thumb = { data.avator ? data.avator : userDatas.defaultAvator }
                            multipleLine onClick = { this.chatWindow }
                            key = { index }
                            className = 'friendMsg'
                            extra = { showTime } > { data.userName } 
                            <Brief > { data.msgInfo[data.msgInfo.length - 1].latestMsg } < /Brief> 
                           
                        </Item>
                    )
                }.bind(this))
            }
            </List>
        )
    }
})




export default Temp({
    url:'/main',
    path:'/api/chat/',
    params:{},
    component:FriendMsg
})


// export default FriendMsg