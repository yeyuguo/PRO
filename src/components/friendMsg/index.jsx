import { List,Badge } from 'antd-mobile'
import { Link, browserHistory } from 'react-router'
import {is,fromJS} from 'immutable'
import Temp from '../common/dataTemp/index'
import Loading from '../common/loading/index'
const Item = List.Item;
const Brief = Item.Brief;

require('antd-mobile/dist/antd-mobile.css')
    // 此处再次引入 antd-mobile.css 是为了解决 antd-mobile 会在最后加载的情况
require('./friendMsg.less')
let countNum = 0

const AvatorTip = React.createClass({
    render(){
                // <Badge text={20} overflowCount={10} corner />
        return(
            <div>
                <img src={this.props.selfAvator.avator!=''?this.props.selfAvator.avator:this.props.defaultAvator} alt=""/>
            </div>
        )
    }
})

const FriendMsg = React.createClass({
    getInitialState() {
        var exampleTime = (new Date('2017-03-17 14:30:25'))
        console.log('000--->:',this.props.fetchState)
        return {
            userDatas:null
        }
    },
    componentWillMount(nextProps, nextState){
        console.log('componentWillMount:',nextProps == this.props)
    },
    chatWindow() {
        browserHistory.push('/personal/98627548');
    },
    showLatestTime() {
        return 'test'
        return data.msgInfo[data.msgInfo.length - 1].latestModify.split(' ').length > 1 ? data.msgInfo[(data.msgInfo.length - 1)].latestModify.split(' ')[1].substr(0, 5) : data.msgInfo[(data.msgInfo.length - 1)].latestModify

    },
    shouldComponentUpdate(nextProps, nextState) {
        // countNum +=1
        // console.log('aa count num:',countNum)
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    componentWillUpdate(nextProps, nextState){
        if(this.props == nextProps) return false;
        if(nextProps.fetchState.data){
            this.setState({
                userDatas:nextProps.fetchState.data
            })
        }
    },
    
    
    render() {
        let userDatas
        let defaultAvator
        if(this.state.userDatas){
            userDatas = this.state.userDatas.users
            defaultAvator = this.state.userDatas.defaultAvator
        }
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
                {/* <div className='loading' style={{'display':this.props.fetchState.isFetching?'block':'none',width:'100%',height:this.props.height || '100%',color:'#fff','backgroundColor':'black'}}>{this.props.fetchState.isFetching?'正在加载...':'数据加载完成'}</div>*/}
               
                <Loading height={this.props.height} isFetching={this.props.fetchState.isFetching} />

            {
                !userDatas ? false :userDatas.map(function(item, index) {
                    // console.log({item})
                    // if (!item){
                    //     return
                    // }
                    const data = item
                        // console.log({data})
                    var time = data.msgInfo[data.msgInfo.length - 1].latestModify
                    time = new Date(time)
                    var nowTime = new Date()
                    const showTime = (time.getTime() < nowTime.getTime()) && (time.getDay() < nowTime.getDay()) ? `星期${en2ch[time.getDay()]}` : `${time.getHours()}:${time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()}`
                    return ( 
                        <Item arrow = "horizontal"
                            // thumb = { data.avator ? data.avator : defaultAvator }
                            thumb = {<AvatorTip selfAvator={data} defaultAvator={defaultAvator}/>}
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
    },
    componentDidMount(nextProps, nextState){
        // if(this.props == nextProps) return false;
        // console.log({nextProps})
        // // console.log({nextState})
        // if(nextProps.fetchState.data){
        //     console.log('nextProps.fetchState.data:',nextProps.fetchState.data)
        //     this.setState({
        //         userDatas:nextProps.fetchState.data
        //     })
        // }
    }
})




export default Temp({
    url:'/main',
    path:'/api/chat/',
    params:{},
    component:FriendMsg
})


// export default FriendMsg