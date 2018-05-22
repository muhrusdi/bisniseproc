import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { cx, css } from 'emotion'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: null,
      breakPoint: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      }
    }
  }

  classes = () => {
    let { sm , md, lg, xl } = this.props
    if (sm) {
      this.setState({ width: this.state.breakPoint.sm })
    }
    if (md) {
      this.setState({ width: this.state.breakPoint.md })
    }
    if (lg) {
      this.setState({ width: this.state.breakPoint.lg })
    }
    if (xl) {
      this.setState({ width: this.state.breakPoint.xl })
    }
  }

  componentWillMount() {
    this.classes()
  }
  render() {
    let { gutter, style } = this.props
    return (
      <div className={cx(css({
        maxWidth: this.state.width,
        position: 'relative',
        margin: '0 auto',
        paddingLeft: gutter ? gutter : 16,
        paddingRight: gutter ? gutter : 16
      }), style)}>
        { 
          this.props.children
        }
      </div>
    )
  }
}

export default Container

Container.propTypes = {
  gutter: PropTypes.number,
}