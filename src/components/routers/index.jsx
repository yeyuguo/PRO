import React from 'react'
import { Router, Route,IndexRoute, browserHistory } from 'react-router';

// require('normalize.css/normalize.css');
// require('antd-mobile/dist/antd-mobile.min.css')
// require('../../styles/main.less')
// require('../../js/common.less')


// import TabMain from '../TabMain-comp'
// import FriendMsg from '../friendMsg/Main'
// import FriendList from '../friendList/Main'
// import FriendShow from '../friendShow/Main'
// import FriendSetting from '../friendSetting/Main'
// import LinkTest from '../test/testLink'
// import LoginPage from '../login/Main'
// import ForgetPwd from '../login/forget/forgetPwd'
// import Register from '../login/register/register'
// import Phone from '../login/register/phone'
// import Email from '../login/register/email'
// import ImgShow from '../demoComp/3dpic/Main'

// import PersonPage from '../personInfo/Main'

// import ListViewTest from '../test/ListView'

// 按需加载路由
const TabMain = (location,fn) =>{  require.ensure([], require => {fn(null, require('../TabMain-comp').default)},'TabMain')}
const FriendMsg = (location,fn) =>{  require.ensure([], require => {fn(null, require('../friendMsg/index').default)},'FriendMsg')}
const FriendList = (location,fn) =>{  require.ensure([], require => {fn(null, require('../friendList/index').default)},'FriendList')}
const FriendShow = (location,fn) =>{  require.ensure([], require => {fn(null, require('../friendShow/index').default)},'FriendShow')}
const FriendSetting = (location,fn) =>{  require.ensure([], require => {fn(null, require('../friendSetting/index').default)},'FriendSetting')}
const LinkTest = (location,fn) =>{  require.ensure([], require => {fn(null, require('../test/testLink').default)},'LinkTest')}
const LoginPage = (location,fn) =>{  require.ensure([], require => {fn(null, require('../login/index').default)},'LoginPage')}
const ForgetPwd = (location,fn) =>{  require.ensure([], require => {fn(null, require('../login/forget/forgetPwd').default)},'ForgetPwd')}
const Register = (location,fn) =>{  require.ensure([], require => {fn(null, require('../login/register/register').default)},'Register')}
const Phone = (location,fn) =>{  require.ensure([], require => {fn(null, require('../login/register/phone').default)},'Phone')}
const Email = (location,fn) =>{  require.ensure([], require => {fn(null, require('../login/register/email').default)},'Email')}
const ImgShow = (location,fn) =>{  require.ensure([], require => {fn(null, require('../demoComp/3dpic/Main').default)},'ImgShow')}
const PersonPage = (location,fn) =>{  require.ensure([], require => {fn(null, require('../personInfo/index').default)},'PersonPage')}
const ListViewTest = (location,fn) =>{  require.ensure([], require => {fn(null, require('../test/ListView').default)},'ListViewTest')}




const Home = React.createClass({
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})

const mainRouterDemand = (location, fn,componentName,componentPath)=>{
    var fn
    if( !fn ){
        fn = function (error, value) {
           done(index, error, value);
        }
    }
    return require.ensure([], require => {
            fn(null, require(componentPath).default)
        },componentName)
}

// const testLink = mainRouterDemand(location,null,'testtest0','../test/testLink.js')

// const testLink = (location,fn) =>{
//     // console.log('fn:',fn)
//     // console.log('fn params:',arguments)   
//     require.ensure([], require => {
//         fn(null, require('../test/testLink.js').default)
//     },'testtest0')
// }

const AppRouter = (
    <Router history={browserHistory}>
        {/*
        有效 
        <Route path="/linkTest" component={LinkTest}/>
        */}
        <Route path="/linkTest" getComponent={LinkTest}/>{/* 有效 */}
        <Route path='/' component={Home}>
            <IndexRoute getComponent={LoginPage}/>
            {/*
            <Route path="linkTest" getComponent={LinkTest}/>
            */}
            <Route path="main" getComponent={TabMain} >
                <IndexRoute getComponent={FriendMsg}/>
                <Route path="friendMsg" getComponent={FriendMsg}/>
                <Route path="friendList" getComponent={FriendList}/>
                <Route path="friendShow" getComponent={FriendShow}/>
                <Route path="friendSetting" getComponent={FriendSetting}/>
            </Route>
            <Route path='login' getComponent={LoginPage}>
                {/*
                <Route path='forget' getComponent={ForgetPwd} />
                */}
            </Route>
            <Route path='login/forget' getComponent={ForgetPwd} />
            <Route path='register' getComponent={Register}>
                <IndexRoute getComponent={Phone}/>
                <Route path='phone' getComponent={Phone} />
                <Route path='email' getComponent={Email} />
            </Route>
            {/*
            TODO 完成把图片展示拆分成组件
            <Route path='personal' getComponent={Personal}>
                <Route path='personal/:userId' getComponent={PersonPage} />
            </Route>
            */}
            <Route path='imgShow' getComponent={ImgShow} />
            <Route path='personal/:userId' getComponent={PersonPage} />
            {/*组件 test */}
            <Route path='test'>
                <Route path='listView' getComponent={ListViewTest}/>
            </Route>
        </Route>
    </Router>
)

export default AppRouter