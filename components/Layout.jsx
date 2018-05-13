import React, { Fragment } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { css } from 'emotion'
import { Row } from 'antd'
import { connect } from 'react-redux'
import { actionToggleLoad } from '../actions'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children, title = 'Nextjs Starter', actionToggle, toggle, toggleSide}) => {
  Router.onRouteChangeStart = (url) => {
    actionToggle(true)
    NProgress.start()
  }
  
  Router.onRouteChangeComplete = () => {
    actionToggle(false)
    console.log('complete', toggle)
    NProgress.done()
  }

  Router.onRouteChangeError = () => {
    actionToggle(false)
    console.log('error')
    NProgress.done()
  }

  const left = !toggleSide ? '200px' : '80px'

  return (
    <Row type="flex">
      <Head>
        <title>{title}</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.5.1/antd.min.css' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ant-design-pro/1.3.0/ant-design-pro.min.css"/>
        <link rel="stylesheet" href="./static/stylesheets/nprogress.css"/>
      </Head>
      <Sidebar/>
      <div className={css`
        position: absolute;
        left: ${left};
        transition: left .3s ease;
        right: 0;
        top: 0;
      `}>
        <Header left={left}/>
        <div className={css`
          padding: 16px;
        `}>
          {
            children
          }
        </div>
      </div>
    </Row>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    toggle: state.toggles.togglePageLoad,
    toggleSide: state.toggles.toggleSide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionToggle: toggle => dispatch(actionToggleLoad(toggle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)