import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import { css } from 'emotion'
import { 
	Row, 
	Col,
	Carousel
} from 'antd'
import { connect } from 'react-redux'
import Container from './Container'
import BlogItem from './BlogItem'
import { MyLoader } from './Components'
import { loadBlogs, loadInfinitieBlogs } from '../actions'

class Blogs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	componentWillMount() {
		this.props.loadBlogs()
	}

	componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

	getDocumentHeight = () => {
	    const body = document.getElementById('__next');
	    const html = document.documentElement;
	    
	    return Math.max(
	      body.scrollHeight, body.offsetHeight,
	      html.clientHeight, html.scrollHeight, html.offsetHeight
	    )
	 }

	getScrollTop = () => {
	    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	 }

	onScroll = () => {
	    if (!(this.getScrollTop() < this.getDocumentHeight() - window.innerHeight)) {
	    	this.setState(prevState => ({
	     		count: prevState.count += 4
	     	}))
				this.props.loadInfinitieBlogs(this.state.count)
     	}
    }

	render() {
		return (
			<div className={css`
				padding-top: 10px;
			`}>
				{
					this.props.blogs.map((blog, i) => (
						<BlogItem key={i} blog={blog}/>
					))
				}
				{
					this.props.loading ? 
					<>
						<MyLoader/>
						<MyLoader/>
						<MyLoader/>
						<MyLoader/>
					</>
					 : null
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		blogs: state.blogs.blogs,
		loading: state.blogs.loading
	}
}

export default connect(mapStateToProps, { loadBlogs, loadInfinitieBlogs })(Blogs)