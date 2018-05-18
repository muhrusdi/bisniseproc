import React, { Component } from 'react'
import Slideshow from '../components/Slideshow'
import MainContent from '../components/MainContent'

class Index extends Component {
	render() {
		return (
			<div>
				<Slideshow/>
				<MainContent/>
			</div>
		)
	}
}

export default Index