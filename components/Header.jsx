import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { css } from 'emotion'
import { connect } from 'react-redux'
import { styles } from '../utils/constants'
import Link from 'next/link'
// import Router from 'next/router'
import { 
  Row, 
  Col, 
  Icon, 
  Tooltip, 
  Button, 
  Dropdown, 
  Menu, 
  Avatar, 
  Breadcrumb,
  Badge } from 'antd'
import { actionToggleSide } from '../actions';

const menus = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">Setting</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">Logout</a>
    </Menu.Item>
  </Menu>
)

class Header extends Component {
  static async getInitialProps({ pathname, req }) {
    console.log('----->', pathname)
    return { pathname: pathname  }
  } 

  render() {
    const styleIcon = css`
      line-height: 1.7;
      font-size: 18px;
    `
    // const { pathname } = Router
    const breadcrumbNameMap = {
      '/': 'Dashboard',
      '/users': 'Users',
      '/users/user-list': 'User List'
    }
    console.log('====>', this.props)
    // const pathSnippets = pathname.split('/').filter(i => i)
    // console.log('=======>', pathSnippets)
    
    // const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    //   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    //   console.log('====>', url)
    //   return (
    //     <Breadcrumb.Item key={url}>
    //       <Link href={url}>
    //         {breadcrumbNameMap[url]}
    //       </Link>
    //     </Breadcrumb.Item>
    //   )
    // })

    // const breadcrumbItems = [(
    //   <Breadcrumb.Item key="home">
    //     <Link to="/">Home</Link>
    //   </Breadcrumb.Item>
    // )].concat(extraBreadcrumbItems)

    return (
      <>
        <div className={css`
          position: fixed;
          left: ${this.props.left};
          right: 0;
          transition: left .3s ease;
          background: #fff;
          z-index: 1000;
        `}>
          <Row id="header" type="flex" justify="space-between" align="middle" className={css`
          height: 50px;
          border-bottom: 1px solid ${styles.colorBorder};
          padding-left: 16px;
          padding-right: 16px;
        `}>
            <Col>
              <Row type="flex" gutter={10} align="middle">
                <Col>
                  <Button onClick={() => this.props.actionToggle(!this.props.toggleSide)}>
                    <Icon type="bars" />
                  </Button>
                </Col>
                <Col>
                  <Breadcrumb>
                    <Breadcrumb.Item key="home">
                      <Link to="/">Dashboard</Link>
                      <Icon type="right" />
                      <Link to="/">Users</Link>
                      <Icon type="right" />
                      <Link to="/">User List</Link>
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row type="flex" align="middle" gutter={10}>
                <Col>
                  <Badge count={0}>
                    <Button>
                    <Icon type="notification"/>
                    </Button>
                  </Badge>
                </Col>
                <Col>
                  <Dropdown overlay={menus} trigger={['click']} getPopupContainer={
                    () => document.getElementById('header')
                  }>
                    <Button>
                      <Icon type="user"/>
                    </Button>
                  </Dropdown>
                </Col>
                <Col>
                  <Tooltip placement="left" title="Bantuan" mouseEnterDelay={0.9}>
                    <Button>
                      <Icon className={css({
                        cursor: 'pointer',
                        visibility: this.props.toggle ? 'hidden' : 'visible'
                      })} type="question-circle-o"/>
                    </Button>
                  </Tooltip>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={css`
          height: 50px;
        `}></div>
      </>
    )
  }
}

Header.propTypes = {
  pathname: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {
    toggle: state.toggles.togglePageLoad,
    toggleSide: state.toggles.toggleSide
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    actionToggle: toggle => dispatch(actionToggleSide(toggle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)