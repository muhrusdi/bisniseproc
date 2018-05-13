import React, { Component, Fragment } from 'react'
import { cx, css } from 'emotion' 
import { styles } from '../utils/constants'
import {  
  DatePicker,
  Row,
  Col,
  Tooltip,
  Icon,
  Tabs,
  Radio,
  Table
} from 'antd'

const { TabPane } = Tabs
const operations = <Row type="flex" gutter={10}>
    <Col>
      <Radio.Group>
        <Radio.Button value="small">Today</Radio.Button>
        <Radio.Button value="default">Week</Radio.Button>
        <Radio.Button value="large">Month</Radio.Button>
        <Radio.Button value="year">Year</Radio.Button>
      </Radio.Group>
    </Col>
    <Col>
      <DatePicker/>
    </Col>
  </Row>

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerCol: [

      ]
    }
  }
  render() {
    const inStyles = {
      style1: {
        border: 'none',
        marginBottom: 14
      }
    }

    const visitData = [
      {
        x: "2017-09-01",
        y: 100
      },
      {
        x: "2017-09-02",
        y: 120
      },
      {
        x: "2017-09-03",
        y: 88
      },
      {
        x: "2017-09-04",
        y: 65
      }
    ]
    const cols = {
      sold: { alias: '销售量' },
      genre: { alias: '游戏种类' }
    }

    // const data = [
    //   { genre: 'Sports', sold: 275, income: 2300 },
    //   { genre: 'Strategy', sold: 115, income: 667 },
    //   { genre: 'Action', sold: 120, income: 982 },
    //   { genre: 'Shooter', sold: 350, income: 5271 },
    //   { genre: 'Other', sold: 150, income: 3710 }
    // ]

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
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
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    }
    return (
      <>
        <div>
          <Row type="flex" gutter={15}>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className={cx(css(inStyles.style1), css`
                background: #97d9c6;               
              `)}>
                asd
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className={cx(css(inStyles.style1), css`
                background: #5ac6aa;             
              `)}>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className={cx(css(inStyles.style1), css`
                background: #e4d528;                
              `)}>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className={cx(css(inStyles.style1), css`
                background: #f18c9d;           
              `)}>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
            <TabPane tab="Tab 1" key="1">
              <Row type="flex">
                <Col span={14}>
                  left
                </Col>
                <Col span={10}>
                  <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small"/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </div>
      </>
    )
  }
}

export default Index