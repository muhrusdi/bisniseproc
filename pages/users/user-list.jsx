import React, { Component } from 'react'
import { css } from 'emotion'
import {
  Row,
  Col,
  Button,
  Table, Icon, Divider
} from 'antd'

const ButtonGroup = Button.Group

class UserList extends Component {
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Action 一 {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
          <Divider type="vertical" />
          <a href="javascript:;" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];
    
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle" className={css`
          height: 50px;
          border-bottom: 1px solid #ddd;
        `}>
          <Col>
            <Button type="primary">Create User</Button>
          </Col>
          <Col>
            <ButtonGroup>
              <Button>Import</Button>
              <Button>Export</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <div>
        <Table columns={columns} dataSource={data} />
        </div>
      </div>
    )
  }
}

export default UserList