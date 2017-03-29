import React from 'react'
import { Router, Route,IndexRoute, browserHistory } from 'react-router';

import TabMain from '../TabMain-comp'
import FriendMsg from '../friendMsg/Main'
import FriendList from '../friendList/Main'
import FriendShow from '../friendShow/Main'
import FriendSetting from '../friendSetting/Main'
import LinkTest from '../test/testLink'
import LoginPage from '../login/Main'
import ForgetPwd from '../login/forget/forgetPwd'
import Register from '../login/register/register'

require('normalize.css/normalize.css');
require('../../styles/less/main.less')
require('antd-mobile/dist/antd-mobile.css')

const AppRouter = (
    <Router history={browserHistory}>
        <Route path="/linkTest" component={LinkTest}/>{/* 有效 */}
        <Route path='/' component={TabMain}>
            <Route path="linkTest" component={LinkTest}/>{/* 无效 */}
        </Route>
        <Route path='/register' component={Register}></Route>   
        <Route path='/login' component={LoginPage}>
            <Route path='forget' component={ForgetPwd} />
        </Route>
        
    </Router>
)

export default AppRouter