
import { browserHistory } from 'react-router'
import {List,Switch,Badge,Modal } from 'antd-mobile'
const Item=List.Item;
const Brief = Item.Brief;
require('./friendSetting.less')

const FriendSetting = React.createClass({
    getInitialState(){
        return {
            mySimpleInfo:{
                userID:'1000',
                userName:'艾伦',
                sex:'boy',
                age:'28岁',
                isVip:true,
                avator:'../../images/nn1.jpg'
            },
            myFans:[{
                userName:'小红',
                userID:'1001',
                age:'22岁',
                sex:'girl',
                avator:'../../images/mn1.jpg'
            },{
                userName:'小明',
                userID:'1002',
                age:'23岁',
                sex:'girl',
                avator:'../../images/mn2.jpg'
            }],
            isReceiveMsg:true
        }
    },
    isReceiveMsg(){
        this.setState({
            isReceiveMsg:!this.state.isReceiveMsg
        })
        alert('是否开启消息通知')
    },
    render(props){
        const mySimpleInfo = this.state.mySimpleInfo;
        // const { getFieldProps } = props.form;
        return (
            <div className='setting' style={{'height':this.props.height}}>
                <List renderHeader={() => '1'} className="mySimpleInfo">
                    <Item extra={'资料'}
                    arrow="horizontal"
                    thumb={mySimpleInfo.avator}
                    multipleLine
                    onClick={() => {}}
                    >
                        {mySimpleInfo.userName} 
                        <span className={mySimpleInfo.isVip?'isVip':'notVip'}>VIP月</span>
                            <Brief>
                                <span className="sex">男</span>
                                <span className="age">28岁</span>
                                <span className="address">青岛</span>
                            </Brief>
                                
                                {/*
                        <div className='mySetting'>
                            <img src={mySimpleInfo.avator} alt=""/>
                            <div className="mySimpleInfo">
                                <p>
                                    <span className="userName">{mySimpleInfo.userName}</span>
                                    <span className={mySimpleInfo.isVip?'isVip':'notVip'}>VIP月</span>
                                </p>
                                <p>
                                    <span className="sex">男</span>
                                    <span className="age">28岁</span>
                                    <span className="address">青岛</span>
                                </p>
                            </div>
                        </div>
                                */}
                    </Item>
                </List>
                <List renderHeader={() => '2'} className="usersWithMe">
                    <Item arrow="horizontal" extra={React.createElement('span',{className:'vipType'},"VIP月用户")}>
                    用户级别
                    </Item>
                    <Item arrow="horizontal" 
                        //extra={React.createElement('span',{className:'numTip'},"2")}
                        extra={<Badge text={77} overflowCount={30} />}
                    >
                    我的粉丝
                    </Item>
                    <Item arrow="horizontal" >
                    关注的人
                    </Item>
                </List>
                <List renderHeader={() => '3'} className="visitorAndSetting">
                    <Item arrow="horizontal" 
                        //extra={React.createElement('span',{className:'numVistor'},"20")}
                        extra={<Badge text={7979} overflowCount={100}/>}
                    >
                    最近的访客
                    </Item>
                    <Item arrow="horizontal">
                    黑名单
                    </Item>
                </List>
                <List renderHeader={() => '4'} className="isTipAndHelp">
                    <Item
                    extra={<Switch name='msgTip' checked={this.state.isReceiveMsg} onChange={this.isReceiveMsg}/>
                    }
                    >
                    消息通知
                    </Item>
                    <Item arrow="horizontal" >
                    帮助
                    </Item>
                </List>
                <List renderHeader={() => '5'} className="isQuite">
                    <Item 
                        onClick={() => Modal.alert('退出账号', '确定退出吗？', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确定', onPress: () => browserHistory.push('/login'), style: { fontWeight: 'bold' } },
                        ])}
                    >
                    退出
                    </Item>
                </List>
            </div>
        )
    }
})

export default FriendSetting