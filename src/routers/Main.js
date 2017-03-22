import React from 'react'
import { Router, Route, browserHistory } from 'react-router';

import FriendMsg from '../components/friendMsg/Main'
import FriendList from '../components/friendList/Main'
import FriendShow from '../components/friendShow/Main'
import FriendSetting from '../components/friendSetting/Main'
 

require('normalize.css/normalize.css');
require('../styles/less/main.less')
require('antd-mobile/dist/antd-mobile.css')

const AppRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={FriendMsg}/>
        <Route path="/friendMsg" component={FriendMsg}/>
        <Route path="/friendList" component={FriendList}/>
        <Route path="/friendShow" component={FriendShow}/>
        <Route path="/friendSetting" component={FriendSetting}/>
    </Router>
)

export default AppRouter