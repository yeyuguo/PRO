import { Link, browserHistory } from 'react-router'
import {ListView} from 'antd-mobile'
import Temp from '../common/dataTemp/index.js'
import {Ajax,ShouldUpdate,is,fromJS} from '../common/dataTemp/ajaxFetch.js'

require('./friendShow.less')

// let data = [
//   {
//     img: '../../images/mn1.jpg',
//     title: '相约酒店',
//     des: '需要风吹日晒',
//     sex:'',
//     isVip:true
//   },
//   {
//     img: '../../images/mn2.jpg',
//     title: '麦当劳邀您过周末',
//     des: '日晒',
//     sex:'girl',
//     isVip:false
//   },
//   {
//     img: '../../images/mn4.jpg',
//     title: '食惠周',
//     des: '不是',
//     sex:'boy',
//     isVip:true
//   },
// ];
// let index = data.length - 1;

let sectionData = {}
let section_num = 0

const FriendShow = React.createClass({
    mixins: [Ajax,ShouldUpdate],
    getInitialState(){
        let ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!=r2,
            sectionHeaderHasChanged:(s1,s2)=>s1!==s2
        })

        return {
            test:'访问成功!',
            dataSource:ds,
            isFetching:false,
            data:{}
        }
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
        if(!rowData){
          return <div>数据为空</div>
        }
        var rowData
        function routeJumple(){
            console.log('routeJumple rowData',rowData)
            // alert(rowData.memberid)
            browserHistory.push('personal/'+rowData.memberid)
        }
        console.log(`rowID:${rowId},rowData:${rowData},sectionId:${sectionId}`)
        var obj = rowData
        console.log('routeJumple obj:',obj)
        var en2Ch={
          'girl':'女',
          'boy':'男',
          'sex':'中性'
        }
        return (
          <div key={rowId}
            onClick={routeJumple}
            style={{
              // padding: '0.08rem 0.16rem'
            }}
          >
          {/*
              <div className='userList-section' style={{ display: '-webkit-box', display: 'flex' }}>
                <img className='userList-img' src={obj.img} />
                <div className='userList-content' style={{ display: 'inline-block' }}>
                  <p className='userList-p'>
                    <span className="IDname">{obj.des}</span> 
                    <span className='addr'>
                      <span className="prov">北京市</span>
                      <span className="city">大兴区</span>
                    </span>
                  </p>
                  <p className="userList-sexIsVip">
                    <span className={obj.sex ?obj.sex:'sex'}>{obj.sex?en2Ch[obj.sex]:'中性'}</span>
                    <span className={obj.isVip?'isVip':'notVip'}>VIP</span>
                  </p>
                  <p className='userList-desc'>{obj.des}</p>
                </div>
              </div>
          */}
            <div className='userList-section' style={{ display: '-webkit-box', display: 'flex' }}>
                <img className='userList-img' src={obj.defaultPhoto} />
                <div className='userList-content' style={{ display: 'inline-block' }}>
                  <p className='userList-p'>
                    <span className="IDname">{obj.nickName}</span> 
                    <span className='addr'>
                      {/*<span className="prov">北京市</span>*/}
                      <span className="city">{obj.workCity}</span>
                    </span>
                  </p>
                  <p className="userList-sexIsVip">
                    <span className={obj.sex ?obj.sex:'sex'}>{obj.sex?en2Ch[obj.sex]:'中性'}</span>
                    <span className={obj.isVip?'isVip':'notVip'}>VIP</span>
                  </p>
                  <p className='userList-desc'>{obj.otherMsg}</p>
                </div>
              </div>
          </div>
        );
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
            <div style={{width:'100%',margin:'0 auto',height:'100%'}}>
                {
                    // !this.state.data ? <div>数据为空，添加加载条</div> :
                    !this.state.data ? <div>数据为空 {this.props.fetchState.error?'fetch error is :'+this.props.fetchState.error:'添加加载条'}</div> :
                    <ListView
                    style={{width:'100%',height:'100%'}}
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                    renderRow={(rowData,sectionId,rowId)=>this.renderSection(rowData,rowId,sectionId)}
                    // onEndReached={this.onEndReached}
                    // onEndReachedThreshold={20}
                    // initialListSize={20}
                    onEndReached={this.request}
                    onEndReachedThreshold={200}
                    renderFooter={() => <div style={{ textAlign: 'center' }}>
                            {this.state.isFetching ? '加载中...' : '加载完毕'}
                        </div>}
                    removeClippedSubviews={false}
                    ></ListView>
                }
            </div>
        )
    },
    componentWillUpdate(nextProps, nextState){
        //state props 更新时候，才会调用，由 shouldComponentUpdate 来决定;
    }
    
})

export default Temp({
    url:'/main/friendShow',   // app 的路由
    path:'/api/friendShow/latest',  // API 的路由,此处的api不能漏掉。否则就会报错
    params:{},  // API 的参数
    component:FriendShow // 组件的名称
})

// export default FriendShow

