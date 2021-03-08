import React from 'react';
import { Table } from '@whalecloud/fdx';
import { fetch } from 'fishx';
import styles from './index.module.less';

const columns = [
  {
    title: '用戶名',
    dataIndex: 'userName',
    sorter: true,
    width: 150,
  },
  {
    title: '用户编号',
    dataIndex: 'userCode',
    width: 200,
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    sorter: true,
    width: 200,
  },
  {
    title: 'isLocked',
    dataIndex: 'isLocked',
    width: 80,
  },
  {
    title: 'state',
    dataIndex: 'state',
    width: 80,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 200,
  },
  {
    title: '更新时间',
    dataIndex: 'updateDate',
    width: 200,
  },
];

class App extends React.Component {
  state = {
    data: [],
    pagination: {
      pageSize: 5,
    },
    loading: false,
  };

  componentDidMount() {
    this.fetch({
      page: 1,
      results: this.state.pagination.pageSize,
    });
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination }; // eslint-disable-line
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    const { page, results } = params;
    this.setState({ loading: true });
    fetch(`/api/user?state=A&pageIndex=${page}&pageSize=${results}`).then(data => {
      const pagination = { ...this.state.pagination }; // eslint-disable-line

      pagination.total = data.total;
      this.setState({
        loading: false,
        data: data.list,
        pagination,
      });
    });
  };

  render() {
    return (
      <div className="bg-white">
        <div className={styles.wrap}>
          <Table
            columns={columns}
            rowKey={record => record.userCode}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
