import React from 'react'
import { Router, Route, hashHistory } from 'react-router';

import FriendMsg from '../components/friendMsg/Main'
import FriendList from '../components/friendList/Main'
import FriendShow from '../components/friendShow/Main'
import FriendSetting from '../components/friendSetting/Main'

const AppRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={FriendMsg}>
            <Route path="friendMsg" component={FriendMsg}/>
            <Route path="friendList" component={FriendList}/>
            <Route path="friendShow" component={FriendShow}/>
            <Route path="friendSetting" component={FriendSetting}/>
        </Route>
    </Router>
)

export default AppRouter