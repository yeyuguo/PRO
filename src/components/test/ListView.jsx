import React from 'react'
import {is,fromJS} from 'immutable'
import {ListView,Button } from 'antd-mobile'
import Temp from '../common/dataTemp/'
import {Ajax,mixins_test} from '../common/dataTemp/ajaxFetch'

require('./style.less')
/*
{
  "data": [
    {
      "des": "\u9700\u8981\u98ce\u5439\u65e5\u6652",
      "img": "../../images/mn1.jpg",
      "isVip": 1,
      "sex": "",
      "title": "\u76f8\u7ea6\u9152\u5e97"
    },
    {
      "des": "\u65e5\u6652",
      "img": "../../images/mn2.jpg",
      "isVip": 0,
      "sex": "girl",
      "title": "\u9ea6\u5f53\u52b3\u9080\u60a8\u8fc7\u5468\u672b"
    },
    {
      "des": "\u4e0d\u662f",
      "img": "../../images/mn4.jpg",
      "isVip": 1,
      "sex": "boy",
      "title": "\u98df\u60e0\u5468"
    }
  ],
  "status": 200
}
*/
let sectionData = {}
let section_num = 0
const ListViewTest = React.createClass({
    mixins: [Ajax],
    getInitialState(){
        let ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!=r2,
            sectionHeaderHasChanged:(s1,s2)=>s1!==s2
        })

        return {
            test:'访问成功!',
            dataSource:ds,
            isFetching:false
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    componentWillUpdate(nextProps, nextState){
        // props 更新时候，才会被调用;
        // this.dictAppend(nextProps.fetchState.data)
        if(!is(fromJS(this.props), fromJS(nextProps))){
            if(nextProps.fetchState.data){
                if(nextProps.fetchState.data){
                    this.dictAppend(nextProps.fetchState.data)
                }
            }
        }
    
        // return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    },
    
    dictAppend(arrayData){
        var section_id = `section_${section_num++}`
        sectionData[section_id] = arrayData
        this.setState({
            data:sectionData,
            isFetching:false
        })
        console.log({section_id})
        // return sectionData
    },
    renderSection(rowData,rowId,sectionId){
        return (
            <div>
                {`rowID:${rowId},rowData:${rowData},sectionId:${sectionId}`}
            </div>
        )
    },
    request(){
        this.setState({
            isFetching:true
        })
        this.ajax({
            path:'/api/friendShow/latest',
            fn:function(data){
                // var that = this
                console.log('--->',data)
                if(data.status == 200){
                    this.dictAppend(data.data)
                }
                console.log('====>',{sectionData})
            }.bind(this)
        })
    },
    render(){
        return (
            <div style={{width:'100%',margin:'0 auto'}}>
                {this.state.test}
                {
                    !this.state.data ? <div>数据为空，添加加载条</div> :
                    <ListView
                    style={{width:'100%',height:'80vh'}}
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                    renderRow={(rowData,sectionId,rowId)=>this.renderSection(rowData,rowId,sectionId)}
                    // onEndReached={this.onEndReached}
                    // onEndReachedThreshold={20}
                    initialListSize={20}
                    onEndReached={this.request}
                    onEndReachedThreshold={200}
                    renderFooter={() => <div style={{ textAlign: 'center' }}>
                            {this.state.isFetching ? '加载中...' : '加载完毕'}
                        </div>}
                    removeClippedSubviews={false}
                    ></ListView>
                }
                <Button onClick={this.request}>按钮</Button>
            </div>
        )
    }
})

export default Temp({
    url:'/test/listview',   // app 的路由
    path:'/api/friendShow/latest',  // API 的路由,此处的api不能漏掉。否则就会报错
    params:{},  // API 的参数
    component:ListViewTest // 组件的名称
})

// 常用函数备注

// 获取 路由参数
// {this.props.params.xxx}
