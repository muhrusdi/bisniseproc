import React, { Component } from 'react'
import { css } from 'emotion'
import { SidebarWrapper } from './Components'
import Sticky from './Sticky'

class Sidebar extends Component {
	
	render() {
		return (
			<Sticky target={this.props.target}>
				<SidebarWrapper/>
			</Sticky>
		)
	}
}

export default Sidebar