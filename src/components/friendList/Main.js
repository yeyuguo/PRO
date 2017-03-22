import React from 'react'

// import ListView from 'antd-mobile';
// import List  from 'antd-mobile';
// import SearchBar from 'antd-mobile/lib/search-bar'
import {SearchBar} from 'antd-mobile'
import { province } from 'antd-mobile-demo-data';
import { ListView, List } from 'antd-mobile';

const { Item } = List;

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    Object.keys(province).forEach((item, index) => {
      sectionIDs.push(item);
      dataBlob[item] = item;
      rowIDs[index] = [];

      province[item].forEach((jj) => {
        rowIDs[index].push(jj.value);
        dataBlob[jj.value] = jj.label;
      });
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
    };
  }

  render() {
    return (
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>头部内容请自定义</span>}
        renderFooter={() => <span>尾部内容请自定义</span>}
        renderSectionHeader={sectionData => (<div className="ih">{sectionData}</div>)}
        renderRow={rowData => (<Item>{rowData}</Item>)}
        className="fortest"
        style={{
          height: this.props.height,
          overflow: 'auto',
        }}
        quickSearchBarStyle={{
          position: 'absolute',
          // top: 15,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{  textAlign: 'center' }}>渲染中...</div>}
      />
    );
  }
}


export default FriendList