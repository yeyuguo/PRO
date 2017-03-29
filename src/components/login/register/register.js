import React from 'react'
import {Flex,WhiteSpace,List, InputItem,Button } from 'antd-mobile'
import {Link} from 'react-router'

require('antd-mobile/dist/antd-mobile.min.css')
require('./register.less')
const FItem = Flex.Item
var maoboli
const Register = React.createClass({
    getInitialState(){
        maoboli=require('../backaground')(window);
        const imgNum = maoboli.random()
        return{
            // chunkImg:'../../images/mn1.jpg'
            bgSetting:{
                chunkImg:'../../images/login/login_'+imgNum+'.jpg',
                width:'100%',
                height:document.documentElement.clientHeight
            }
        }
    },
    registerSubmit(){

    },
    render(){
        
        const bgImgState = this.state.bgSetting
        return (
            <div className="register">
                <Flex>
                    <FItem>
                        <div id="box" style={{width: bgImgState.width,height:bgImgState.height}} data-image-src={bgImgState.chunkImg}></div>
                    </FItem>
                </Flex>
                <div className="register_content">
                {/*此处使用不同路由加载  邮箱/手机 注册 */}
                    {this.props.children}
                </div>
            </div>
        )
    },
    componentDidMount(){
        // 毛玻璃触发的效果
        // 由于require 有缓存，否则会出现第二次require不加载该文件
        // require('../backaground')(window);
        // window.initWindow(document.getElementById('box'));
        
        maoboli.initWindow(document.getElementById('box'));
    },
    componentDidUpdate(){
    }
})

export default Register