import React, { Component } from 'react'
import Link from 'next/link'
import { css } from 'emotion'
import { 
	Row, 
	Col,
	Button,
	Menu,
	Icon,
	Dropdown
} from 'antd'
import Container from './Container'
import logo from '../static/images/bisniseproc-logo.png'

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
);

class Globalnav extends Component {
	render() {
		return (
			<nav className={css`
				background: #242424;
				a {
					color: #fff;
				}
			`}>
				<Container xl>
					<Row type="flex" align="middle" justify="space-between" className={css`
						height: 60px;
						`}>
						<Col>
							<Link href="/"><a><img src={logo} alt=""/></a></Link>
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
									<Link href="#"><a>Category</a></Link>
								</Col>
								<Col>
									<Dropdown overlay={menu} trigger={['click']}>
									    <Icon type="search" className={css`
									    	font-size: 20px;
									    	color: #fff;
									    	padding-top: 4px;
									    	cursor: pointer;
									    	`}/>
									</Dropdown>
								</Col>
								<Col>
									<Button type="primary">Langganan</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</nav>
		)
	}
}

export default Globalnav