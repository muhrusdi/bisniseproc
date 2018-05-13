import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Link from 'next/link'
import { css } from 'emotion'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class Sidebar extends Component {
  render() {
    return (
      <nav>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.toggle}
          className={css`
            height: 100vh;
            position: fixed !important;
            z-index: 1032;
          `}
        >
          <div className={css`
            height: 46px;
          `}>
            logo
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link href="/">
                <a>
                  <Icon type="user" />
                  <span>Dashboard</span>
                </a>
              </Link>
            </Menu.Item>
            
            <Menu.Item key="2">
              <Link href="/blog">
                <a>
                  <Icon type="video-camera" />
                  <span>Blog</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/post">
                <a>
                  <Icon type="upload" />
                  <span>Post</span>
                </a>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Users</span></span>}>
              <Menu.Item key="4">
                <Link href="/users/user-list">
                  <a>
                    <Icon type="video-camera" />
                    <span>User List</span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link href="/blog">
                  <a>
                    <Icon type="video-camera" />
                    <span>User Group</span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link href="/blog">
                  <a>
                    <Icon type="video-camera" />
                    <span>Login Log</span>
                  </a>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    toggle: state.toggles.toggleSide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionToggle: toggle => dispatch(actionToggleSide(toggle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)