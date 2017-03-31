import React from 'react'
import {ListView} from 'antd-mobile'
// import ListView from 'antd-mobile/lib/list-view';
// import List  from 'antd-mobile/lib/list';

require('./friendShow.less')

const data = [
  {
    img: '../../images/mn1.jpg',
    title: '相约酒店',
    des: '需要风吹日晒',
    sex:'',
    isVip:true
  },
  {
    img: '../../images/mn2.jpg',
    title: '麦当劳邀您过周末',
    des: '日晒',
    sex:'girl',
    isVip:false
  },
  {
    img: '../../images/mn4.jpg',
    title: '食惠周',
    des: '不是',
    sex:'boy',
    isVip:true
  },
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const FriendShow = React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.dataBlob = {};
    this.sectionIDs = [];
    this.rowIDs = [];
    this.genData = (pIndex = 0) => {
      for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        this.sectionIDs.push(sectionName);
        this.dataBlob[sectionName] = sectionName;
        this.rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
          const rowName = `S${ii}, R${jj}`;
          this.rowIDs[ii].push(rowName);
          this.dataBlob[rowName] = rowName;
        }
      }
      // new object ref
      this.sectionIDs = [].concat(this.sectionIDs);
      this.rowIDs = [].concat(this.rowIDs);
    };
    this.genData();
    return {
      dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
      isLoading: false,
    };
  },

  onEndReached(event) {
    // load new data
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
        isLoading: false,
      });
    }, 1000);
  },
  descWindow(){
    alert(0)
  },
  render() {
    const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      console.log({data})
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      var en2Ch={
        'girl':'女',
        'boy':'男',
        'sex':'中性'
      }
      return (
        <div key={rowID}
          onClick={this.descWindow}
          style={{
            // padding: '0.08rem 0.16rem'
          }}
        >
        {/*
          <h3 style={{ padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6' }}>
            {obj.title}
          </h3>
        */}
          <div className='userList-section' style={{ display: '-webkit-box', display: 'flex' }}>
            <img className='userList-img' src={obj.img} />
            <div className='userList-content' style={{ display: 'inline-block' }}>
              <p className='userList-p'>
                <span className="IDname">{obj.des}</span> 
                <div className='addr'>
                  <span className="prov">北京市</span>
                  <span className="city">大兴区</span>
                </div>
              </p>
              <p className="userList-sexIsVip">
                <span className={obj.sex ?obj.sex:'sex'}>{obj.sex?en2Ch[obj.sex]:'中性'}</span>
                <span className={obj.isVip?'isVip':'notVip'}>VIP</span>
              </p>
              <p className='userList-desc'>不忘最初的梦想</p>
            </div>
          </div>
        </div>
      );
    };
    return (<div style={{ margin: '0 auto'}}>
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => <div style={{ textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderSectionHeader={(sectionData) => (
          <div>{`任务 ${sectionData.split(' ')[1]}`}</div>
        )}
        renderRow={row}
        renderSeparator={separator}
        className="fortest"
        style={{
          height: this.props.height,
          overflow: 'auto',
        }}
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { console.log('scroll'); }}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    </div>);
  },
});

export default FriendShow