import React, { Fragment} from 'react'
import Link from 'next/link'
import { cx, css } from 'emotion'
import { Row, Col, Avatar, Icon, Button } from 'antd'
import ContentLoader from 'react-content-loader'
import MultiClamp from 'react-multi-clamp'
import { styles } from '../utils/constants'

export const ImageCover = ({classes, image}) => {
	return (
		<div className={cx(css({
			position: 'relative',
			height: 300,
			':after': {
				background: `url(${image}) center center`,
				top: 0,
				bottom: 0,
				left: 0,
				position: 'absolute',
				right: 0,
				content: '""',
				backgroundSize: 'cover'
			}
		}), classes, 'image-cover')}></div>
	)
}

export const ListInline = () => (
	<ul className={css`
		display: flex;
		align-items: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
		li {
			font-size: 12px;
		}
		li {
			padding-right: 10px;
		}
		`}>
		<li><a href="#">Muhammad Rusdi</a></li>
		<li>.</li>
		<li>8 min ago</li>
	</ul>
)

export const BlogItemText = ({blog}) => {
	const href = {
		pathname: '/blog',
		query: { id: blog.id, title: blog.title, body: blog.body }
	}

	const as = {
		pathname: `/blog/${blog.id}`,
		hash: blog.title
	}

	return (
		<>
			<Link href="">
				<a>
					<h4 className={css`
					font-size: 14px;
					color: ${styles.colorCategory}
					`}>Top Component Culture</h4>
				</a>
			</Link>
			<Link prefetch href={href} as={as}>
				<a>
					<h2 className={css`
						font-weight: bold;
						font-size: 22px;
					`}>
						<MultiClamp ellipsis="..." clamp={3}>
							{ blog.title }
						</MultiClamp>
					</h2>
				</a>
			</Link>
			<p className={css`
				font-size: 14px;
				`}>
			<MultiClamp ellipsis="..." clamp={3}>
				
				    { blog.body }
			    
			</MultiClamp>
			</p>
			<ListInline/>
		</>
	)
}

export const MyLoader = props => (
	<div className={css`
		padding-bottom: 15px;
		`}>
		<ContentLoader
			height={100}
			width={400}
			speed={2}
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
			{...props}
		>
			<rect x="0" y="36.8" rx="0" ry="0" width="197.6" height="9" /> 
			<rect x="0" y="57.05" rx="0" ry="0" width="237" height="6" /> 
			<rect x="0" y="71.05" rx="0" ry="0" width="162" height="6" /> 
			<rect x="0" y="91.05" rx="0" ry="0" width="86" height="6" /> 
			<rect x="0" y="19.05" rx="0" ry="0" width="93" height="6" /> 
			<rect x="274" y="12.05" rx="0" ry="0" width="125" height="89" />
		</ContentLoader>
	</div>
)

const SidebarItem = () => (
	<div className={css`
		padding-bottom: 25px;
		`}>
		<Row type="flex" align="middle">
			<Col span={5}>
				<div className={css`
					font-size: 30px;
				    color: #CCCCCC;
					`}>
					01
				</div>
			</Col>
			<Col span={19}>
				<h2 className={css`
					color: #333;
				    font-size: 16px;
				    line-height: 1.5;
					`}>Amazon Is Doing What It Does Best: Making Lots and Lots of Money</h2>
				<ListInline/>
			</Col>
		</Row>
	</div>
)

export const SidebarWrapper = () => {
	return (
		<>
			<div className={css`
				margin-top: 17px;
				`}>
				<div className={css`
					border-bottom: 1px solid #eee;
				    padding-bottom: 17px;
				    margin-bottom: 30px;
					`}>
					<h4 className={css`
						font-size: 18px;
						font-weight: bold;
						margin: 0;
						`}>Popular</h4>
				</div>
				<div>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
				</div>
			</div>
			<div className={css`
				margin-top: 17px;
				`}>
				<div className={css`
					border-bottom: 1px solid #eee;
				    padding-bottom: 17px;
				    margin-bottom: 30px;
					`}>
					<h4 className={css`
						font-size: 18px;
						font-weight: bold;
						margin: 0;
						`}>Event</h4>
				</div>
				<div>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
					<SidebarItem/>
				</div>
			</div>
		</>
	)
}

export const SliderPrimaryItem = ({image}) => (
	<div>
		<Row type="flex" align="middle" gutter={30}>
			<Col span={15}>
				<ImageCover classes={css`height: 500px`} image={image}/>
			</Col>
			<Col span={7}>
				<div className={css`
					position: relative;
					line-height: normal;
					text-align: left;
					`}>
					<h4 className={css`
						font-size: 16px;
					    color: #31ABB5;
						`}>Top Componay Culture</h4>
					<h2 className={css`
					    font-size: 30px;
					    font-weight: bold;
					    line-height: 1.3;
						`}>
						<MultiClamp ellipsis="..." clamp={3}>
							Sunt aut facere repellat provident occaecati excepturi optio reprehenderit
						</MultiClamp>
					</h2>
					<ul className={css`
						display: flex;
						align-items: center;
						list-style: none;
						padding: 0;
						margin: 0;
						margin-bottom: 20px;
						li {
							padding-right: 10px;
						}
						`}>
						<li>
							<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
						</li>
						<li><a href="#">Muhammad Rusdi</a></li>
					</ul>
					<p className={css`
					    font-size: 14px !important;
					    font-family: 'Georgia';
					    font-style: italic;
					    color: #888888;
						`}>
					<MultiClamp ellipsis="..." clamp={3}>
							
							quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
							
						</MultiClamp>
						</p>
					
					<Button type="primary">Read More</Button>
				</div>
			</Col>
		</Row>
	</div>
)

export const Ellipsis = ({clamp, children}) => (
	<div className={css`
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-box-orient: vertical;
	    display: -webkit-box;
			-webkit-line-clamp: ${clamp};
			overflow: hidden;
		`}>
		{ children }
	</div>
)

export const SliderThumbItem = ({image}) => {
	const styles = {
		h2: css`
		font-size: 12px;
		line-height: normal;
		text-align: left;`
	}
	return (
		<div>
			<Row type="flex" align="middle" gutter={10}>
				<Col span={12}>
					<ImageCover classes={css`height: 100px`} image={image}/>
				</Col>
				<Col span={12}>
					<div>
					<h2 className={styles.h2}>
					<MultiClamp ellipsis="..." clamp={3}>
							
								quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto	
							
						</MultiClamp>
						</h2>
					</div>
				</Col>
			</Row>
		</div>
	)
}
