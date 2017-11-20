import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'antd';

const colnums=[
  {
    title:"color",
    dataIndex:"colorDom"
  }
]
const pagination = {
  current:1,
  total: 30,
}

ReactDOM.render(
  <Table columns={colnums} pagination={pagination} dataSource={[]}/>,
  document.getElementById('container')
);
