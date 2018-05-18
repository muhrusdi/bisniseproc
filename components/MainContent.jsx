import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Link from 'next/link'
import { cx, css } from 'emotion'
import Truncate from 'react-truncate'
import { 
	Row, 
	Col,
	Affix,
	Button
} from 'antd'
import Container from './Container'
import Blogs from '../components/Blogs'
import Sidebar from '../components/Sidebar'
import { ImageCover, ListInline, Ellipsis } from '../components/Components'
import image from '../static/images/image-slider.png'
import { styles } from '../utils/constants'

class MainContent extends Component {
	constructor(props) {
		super(props)
		this.scrollContainer = React.createRef()
		this.state = {
			offsetTop: 0
		}
	}
	componentDidMount() {
		this.setState({
			offsetTop: findDOMNode(this.scrollContainer.current).getBoundingClientRect().top
		})
	}
	render() {
		return (
			<div>
				<Container xl>
					<Row type="flex" gutter={40} ref={this.scrollContainer} className={cx(css`
						padding-top: 30px;
					`)}>
						<Col span={16}>
							<h2 className={css`
								font-size: 40px;
							    font-weight: bold;
								`}>Berita Terbaru</h2>
							<div className={css`
								padding-bottom: 25px;
								border-bottom: 1px solid #ddd;
								`}>
								<Row type="flex" gutter={20} align="middle">
									<Col span={14}>
										<ImageCover image={image}/>
									</Col>
									<Col span={10}>
										<h4 className={css`
											font-size: 18px;
											color: ${styles.colorCategory}
											`}>Top Component Culture</h4>
										<h2 className={css`
											font-size: 30px;
											font-weight: bold;
											line-height: 1.3;
											`}>
											<Ellipsis clamp={3}>
												Amazon Is Doing What It Does Best: Making Lots and Lots of Money, What It Does Best: Making Lots and Lots of Money
											</Ellipsis>
										</h2>
										<p>Be a part of our annual list celebrating companies where employee advancement, happiness and health comes first.</p>
										<ListInline/>
									</Col>
								</Row>
							</div>
							<Blogs/>
						</Col>
						<Col span={8}>
							<Sidebar target={this.state.offsetTop}/>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default MainContent