import React, { Component } from 'react'
import Link from 'next/link'
import { cx, css } from 'emotion'
import { 
	Row, 
	Col,
	Button,
	Menu,
	Icon,
	Dropdown,
	Modal,
	Spin
} from 'antd'
import { ListInline } from './Components'
import OverlaySearch from './OverlaySearch'
import Container from './Container'
import { connect  } from 'react-redux'
import { actionToggleSearch } from '../actions'
import logo from '../static/images/bisniseproc-logo.png'
import { styles } from '../utils/constants'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)
class Globalnav extends Component {
	constructor(props) {
		super(props)

	}
	showModal = () => {
    this.props.handleToggleSearch(!this.props.toggleSearch)
	}

	render() {
		console.log(this.props.toggleSearch)
		return (
			<>
			<nav className={css`
				background: #242424;
				position: relative;
				z-index: 1001;
				a {
					color: #fff;
				}
			`}>
				<Container xl>
					<Row type="flex" align="middle" justify="space-between" className={css`
						height: 60px;
						`}>
						<Col>
							<Link href="/"><a><img className={css`height: 23px;`} src={logo} alt=""/></a></Link>
						</Col>
						<Col>
							<Row type="flex" align="middle" gutter={20}>
								<Col>
									<Link href="#"><a>Latest</a></Link>
								</Col>
								<Col>
									<Link href="#"><a>Popular</a></Link>
								</Col>
								<Col>
									<Link href="#"><a>Event</a></Link>
								</Col>
								<Col>
									<Dropdown overlay={menu} trigger={['click']}>
										<a href="#">Category</a>
									</Dropdown>
								</Col>
								<Col>
									<Icon type="search" className={css`
										font-size: 20px;
										color: #fff;
										padding-top: 4px;
										cursor: pointer;
										`} onClick={this.showModal}/>
								</Col>
								<Col>
									<Button type="primary">Langganan</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</nav>
			{
				this.props.toggleSearch ? 
					<OverlaySearch visible={this.props.toggleSearch}/> : null
			}
			</>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleToggleSearch: toggle => {
			dispatch(actionToggleSearch(toggle))
		}
	}
}

const mapStateToProps = state => {
	return {
		toggleSearch: state.toggles.toggleSearch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Globalnav)