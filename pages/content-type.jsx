import React, { Component } from 'react'
import { css } from 'emotion'
import {
  Row,
  Col,
  Button,
  Table,
  Divider,
  Radio,
  Icon,
  Input
} from 'antd'

const ButtonGroup = Button.Group
const Search = Input.Search

class ContentType extends Component {
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: 'Fields',
      dataIndex: 'fields',
      key: 'fields',
    }, {
      title: 'Updated',
      dataIndex: 'updated',
      key: 'updated',
    }, {
      title: 'By',
      dataIndex: 'by',
      key: 'by',
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },]
    
    const data = [{
      key: '1',
      name: 'Blog',
      description: 'New York No. 1 Lake Park',
      fields: 12,
      updated: '2 hours ago',
      by: 'Me',
      status: 'ACTIVE'
    }, {
      key: '2',
      name: 'Slidshow',
      description: 'London No. 1 Lake Park',
      fields: 23,
      updated: '2 hours ago',
      by: 'Me',
      status: 'ACTIVE'
    }, {
      key: '3',
      name: 'Post',
      description: 'Sidney No. 1 Lake Park',
      fields: 23,
      updated: '2 hours ago',
      by: 'Me',
      status: 'ACTIVE'
    }]
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle" className={css`
          height: 50px;
          border-bottom: 1px solid #ddd;
        `}>
          <Col>
            <Button type="primary">Add Content Type</Button>
          </Col>
          <Col>
            <Row type="flex" align="middle" gutter={10}>
              <Col>
                <Radio.Group>
                  <Radio.Button value="small">All</Radio.Button>
                  <Radio.Button value="default">Changed</Radio.Button>
                  <Radio.Button value="large">Draft</Radio.Button>
                  <Radio.Button value="year">Active</Radio.Button>
                </Radio.Group>
              </Col>
              <Col>
                <Search
                  placeholder="Search"
                  onSearch={value => console.log(value)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    )
  }
}

export default ContentType