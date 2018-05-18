import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { css } from 'emotion'
import { withRouter } from 'next/router'
import { Avatar, Row, Col } from 'antd'
import { getBlog } from '../../actions'
import Globalnav from '../../components/Globalnav'
import { ImageCover, ListInline } from '../../components/Components'
import Container from '../../components/Container'
import image from '../../static/images/image-slider.png'

class Index extends Component {
	componentWillMount() {
		this.props.getBlog(this.props.router.query.id)
	}

	componentDidMount() {
		document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
	}
	render() {
		const styles = {
			inset: css`
				padding-left: 20px;
				padding-right: 20px;
				margin: 0 auto;
				max-width: 740px;
				h2 {
					--x-height-multiplier: 0.342;
					--baseline-multiplier: 0.22;
					font-family: "Poppins", "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
					font-weight: 700;
					font-style: normal;
					letter-spacing: 0;
					font-size: 42px;
					line-height: 1.2;
					padding-top: 5px!important;
				}
				p {
					--x-height-multiplier: 0.375;
					--baseline-multiplier: 0.17;
					font-family: Georgia,Cambria,"Times New Roman",Times,serif;
					letter-spacing: .01rem;
					font-weight: 400;
					font-style: normal;
					font-size: 21px;
					line-height: 1.58;
					letter-spacing: -.003em;
				}
			`,
			outset: css`
				max-width: 1000px;
				width: 100%;
				margin: 0 auto;
			`
		}
		return (
			<div className={css`
				padding-top: 30px;
			`}>
				<Container xl>
					<div>
						<div className={styles.inset}>
							<ul className={css`
								display: flex;
								align-items: center;
								list-style: none;
								margin: 0;
								padding: 0;
								margin-bottom: 30px;
								li {
									padding-right: 16px;
									ul {
										padding: 0;
										margin: 0;
										list-style: none;
										a {
											color: #000;
										}
									}
								}
							`}>
								<li><Avatar size="large" icon="user" /></li>
								<li>
									<ul>
										<li><a>Muhammad Rusdi</a></li>
										<li>10 April</li>
									</ul>
								</li>
							</ul>
							<h2>{this.props.router.query.title}</h2>
						</div>
						<div className={styles.outset}>
							<ImageCover classes={css`
								height: 400px;
								margin-bottom: 50px;
								margin-top: 30px;
							`} image={image}/>
						</div>
						<div className={styles.inset}>
							<p>{this.props.router.query.body}</p>
						</div>
					</div>
				</Container>
				<div className={css`
					background: #f5f5f5;
					padding-bottom: 30px;
					padding-top: 30px;
				`}>
					<div className={styles.outset}>
						<Row type="flex" gutter={30}>
							<Col span={12}>
								<div>
									<ImageCover classes={css`
										height: 200px;
										margin-bottom: 20px;
									`} image={image}/>
									<h2>Rifles Aren’t Dangerous. But Unregulated Handguns Threaten Gun Rights.</h2>
									<ListInline/>
								</div>
							</Col>
							<Col span={12}>
								<div>
									<ImageCover classes={css`
										height: 200px;
										margin-bottom: 20px;
									`} image={image}/>
									<h2>Rifles Aren’t Dangerous. But Unregulated Handguns Threaten Gun Rights.</h2>
									<ListInline/>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		blogs: state.blogs.blog
	}
}

export default connect(mapStateToProps, { getBlog })(withRouter(Index))