import React from 'react'
import { Router, Route,IndexRoute, browserHistory } from 'react-router';

import Home from '../Home'
import TabMain from '../TabMain-comp'
import FriendMsg from '../friendMsg/Main'
import FriendList from '../friendList/Main'
import FriendShow from '../friendShow/Main'
import FriendSetting from '../friendSetting/Main'
import LinkTest from '../test/testLink'
import LoginPage from '../login/Main'
import ForgetPwd from '../login/forget/forgetPwd'
import Register from '../login/register/register'
import Phone from '../login/register/phone'
import Email from '../login/register/email'

require('normalize.css/normalize.css');
require('../../styles/less/main.less')
require('antd-mobile/dist/antd-mobile.css')

const AppRouter = (
    <Router history={browserHistory}>
        <Route path="/linkTest" component={LinkTest}/>{/* 有效 */}
        <Route path='/' component={Home}>
            <IndexRoute component={LoginPage}/>
            <Route path="linkTest" component={LinkTest}/>
            <Route path="main" component={TabMain}/>
            <Route path='login' component={LoginPage}>
                {/*
                <Route path='forget' component={ForgetPwd} />
                */}
            </Route>
            <Route path='login/forget' component={ForgetPwd} />
            <Route path='register' component={Register}>
                <IndexRoute component={Phone}/>
                <Route path='phone' component={Phone} />
                <Route path='email' component={Email} />
            </Route>   
        </Route>
        
        
        
    </Router>
)

export default AppRouter