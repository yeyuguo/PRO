import React from 'react'
import {List} from 'antd-mobile'
const Item = List.Item;

require('./friendMsg.less')

const FriendMsg = React.createClass({
    chatWindow(){
        alert(0)
    },
    render(){
        return (
            <List renderHeader={() => ''} style={{'height':this.props.height}} className="my-list">
                <Item extra={'内容内容'} onClick={this.chatWindow}>标题文字</Item>
            </List>
        )
    }
})

export default FriendMsg