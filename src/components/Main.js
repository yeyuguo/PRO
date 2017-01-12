import React from 'react';

require('normalize.css/normalize.css');
require('../styles/less/main.less')
require('antd-mobile/dist/antd-mobile.css')

import React from 'react'

// import { Tabs, WhiteSpace } from 'antd-mobile';
import Tabs from 'antd-mobile/lib/tabs'
import WhiteSpace from 'antd-mobile/lib/white-space'



// 各个 功能模块的组件
import FriendMsg from './friendMsg/Main'
import FriendList from './friendList/Main'
import FriendShow from './friendShow/Main'
import FriendSetting from './friendSetting/Main'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


function routeJump(){
    console.log()
}
const TabMain = React.createClass({
  getInitialState(){
    return {
      tabPosition: 'bottom',
    };
  },
  render() {
    return (
      <div className='main-page'>
        <Tabs defaultActiveKey="1" tabBarPosition={this.state.tabPosition} onChange={callback} onTabClick={routeJump}>
          <TabPane tab="聊天" key="1">
            <div className='main-content' style={{alignItems: 'center',  }}>
              1
              <Link to="/friendMsg">1</Link>
            </div>
          </TabPane>
          <TabPane tab="朋友列表" key="2">
          </TabPane>
          <TabPane tab="朋友圈" key="3">
            <div className='main-content' style={{alignItems: 'center',  }}>
              3
            </div>
          </TabPane>
          <TabPane tab="朋友设置" key="4">
            <div className='main-content' style={{alignItems: 'center', }}>
              4
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  },
});

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