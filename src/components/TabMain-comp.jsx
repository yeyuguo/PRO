
// require('normalize.css/normalize.css');
// require('antd-mobile/dist/antd-mobile.min.css')
// require('../styles/main.less')

import {Link} from 'react-router'

import { Tabs, WhiteSpace } from 'antd-mobile';
// import Tabs from 'antd-mobile/lib/tabs'
// import WhiteSpace from 'antd-mobile/lib/white-space'


// 各个 功能模块的组件
import FriendMsg from './friendMsg/index'
import FriendList from './friendList/index'
import FriendShow from './friendShow/index'
import FriendSetting from './friendSetting/index'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
class TabMain extends React.Component{
  state = {
    tabPosition: 'bottom'
  }
  getSelected(){
    // console.log('click li tag:',this)
    // let selectedNode = document.getElementsByClassName('tab_footer')
    // selectedNode.onClick = function(e){
    //   this.
    // }
  }
  render() {
    var height = document.documentElement.clientHeight - 45
    return (
      /*
      <div className='main-page'>
        <Tabs defaultActiveKey="1" tabBarPosition={this.state.tabPosition} onChange={callback}>
          <TabPane tab="聊天" key="1">
            <div className='main-content' >
              <FriendMsg height={height}/>
            </div>
          </TabPane>
          <TabPane tab="朋友列表" key="2">
            <div className='main-content' >
            <FriendList height={height} />
            </div>
          </TabPane>
          <TabPane tab="朋友圈" key="3">
            <div className='main-content' >
              <FriendShow height={height}/>
            </div>
          </TabPane>
          <TabPane tab="个人设置" key="4">
            <div className='main-content' >
              <FriendSetting height={height} />
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
      */
      <div className="main-page">
        <div className="tab_body">
          {this.props.children}
        </div>
        <div className="tab_footer">
          <ul>
            <li><Link to='/main/friendMsg'><img src="../images/icon/chat.svg" alt="chat"/><span>聊天</span></Link></li>
            <li><Link to='/main/friendList'><img src="../images/icon/通讯录.svg" alt="通讯录"/><span>朋友列表</span></Link></li>
            <li><Link to='/main/friendShow'><img src="../images/icon/朋友圈.svg" alt="朋友圈"/><span>朋友圈</span></Link></li>
            <li><Link to='/main/friendSetting'><img src="../images/icon/个人设置.svg" alt="个人设置"/><span>个人设置</span></Link></li>
          </ul>
        </div>
      </div>
    );
  }
  // componentDidMount(){
  // }
};

// var TabMain = React.createClass({
//   render:function(){
//     return (
//       <div>
//         hahahaha
//       </div>
//     )
//   }
// })



// export default TabMain
// module.exports = TabMain
export default TabMain