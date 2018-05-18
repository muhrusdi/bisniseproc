import React, { Component } from 'react'
import Link from 'next/link'
import { css } from 'emotion'
import { 
	Row, 
	Col,
	Carousel 
} from 'antd'
import { ImageCover } from '../components/Components'
import { ListInline } from '../components/Components'
import { BlogItemText } from '../components/Components'
import image from '../static/images/image-slider.png'

export default ({blog}) => {
	return (
		<div className={css`
			padding-top: 20px;
			padding-bottom: 20px;
			`}>
			<Row type="flex" align="middle" gutter={20}>
				<Col span={16}>
					<BlogItemText blog={blog}/>
				</Col>
				<Col span={8}>
					<ImageCover classes={css`
						height: 200px;
						`} image={image}/>
				</Col>
			</Row>
		</div>
	)
}