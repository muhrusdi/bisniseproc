import React, { Fragment } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { css } from 'emotion'
import { Row } from 'antd'
import { connect } from 'react-redux'
import { actionToggleLoad, actionToggleSearch } from '../actions'
import Globalnav from './Globalnav'

const Layout = ({ children, title = 'Bisnis Eproc', actionToggle, toggle, handleToggleSearch, toggleSide}) => {
	Router.onRouteChangeStart = (url) => {
		handleToggleSearch(false)
		NProgress.start()
	}
	
	Router.onRouteChangeComplete = () => {
		NProgress.done()
	}

	Router.onRouteChangeError = () => {
		NProgress.done()
	}

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.5.2/antd.min.css' />
				<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700" rel="stylesheet"/>
				<link rel="stylesheet" href="./static/stylesheets/nprogress.css"/>
			</Head>
			<Globalnav/>
			{
				children
			}
		</>
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
		actionToggle: toggle => dispatch(actionToggleLoad(toggle)),
		handleToggleSearch: toggle => dispatch(actionToggleSearch(toggle))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)