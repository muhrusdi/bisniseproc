import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { cx, css } from 'emotion'

class Sticky extends Component {
	constructor(props) {
		super(props)
		this.width = React.createRef()
		this.state = {
			position: 'relative',
			width: 'initial'
		}
	}

	componentDidMount() {
      	window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      	window.removeEventListener('scroll', this.onScroll, false);
    }

	getDocumentHeight = () => {
	    const body = document.body;
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
	    if (window.pageYOffset + window.innerHeight >= findDOMNode(this).getBoundingClientRect().top + findDOMNode(this).getBoundingClientRect().height + 1219) {
	    	this.setState({
	    		position: 'fixed',
	    		width: `${this.width.current.offsetWidth}px`
	    	})
	    } else if (this.props.target >= 0) {
	    	this.setState({
	    		position: 'relative',
	    		width: `initial`
	    	})
	    }
    }

	render() {
		const { position, width } = this.state
		return (
			<div className={cx(css`
				position: ${position};
				width: ${width};
				`, css`
					bottom: 0;
				`)} ref={this.width}>
				{
					this.props.children
				}
			</div>
		)
	}
}

export default Sticky