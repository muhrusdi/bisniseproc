import React, { Component } from 'react'
import { css } from 'emotion'
import {
  Row,
  Col,
  Button
} from 'antd'

const ButtonGroup = Button.Group

class UserList extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle" className={css`
          height: 44px;
          border-bottom: 1px solid #ddd;
        `}>
          <Col>
            <h4 className={css`margin: 0`}>User List</h4>
          </Col>
          <Col>
            <ButtonGroup>
              <Button>Import</Button>
              <Button>Export</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserList