import React, { Component } from 'react'
import { Row, Col, Spin, Icon } from 'antd'
import Container from './Container'
import { cx, css } from 'emotion'
import { ListInline } from './Components'
import { styles } from '../utils/constants'

class OverlaySearch extends Component {
	constructor(props) {
    super(props)
    this.state = {
      timer: null,
      visible: false,
      searchVisible: false
    }
  }
  
  handleChange = () => {
		clearTimeout(this.state.timer)
		this.setState({searchVisible: true})
		this.state.timer = setTimeout(() => {
			this.setState({searchVisible: false})
		}, 500)
	}

  render() {
    const show = !this.state.searchVisible ? 'none' : 'block' 
    console.log(show)
    return (
      <div className={cx(css`
        position: fixed;
        left: 0;
        right: 0;
        z-index: 199;
        top: 0;
        bottom: 0;
        background: #fff;
        input {
          padding: 15px 28px;
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 20px;
          outline: none;
          user-select: none;
          transition: border-color .3s ease;
        }
        input:focus {
          border-color: ${styles.colorPrimary}
        }
      `)}>
        <Container md style={css`height: 100%`}>
          <div className={css`
            margin-top: 130px;
          `}>
            <form action="">
              <div className={css`
                position: relative;
              `}>
                <input type="text" placeholder="Search" 
                  onChange={this.handleChange}
                />
                <div className={css`
                  position: absolute;
                  right: 22px;
                  top: 17px;
                  display: ${show}
                `}>
                  <Spin indicator={
                    <Icon type="loading" style={{ fontSize: 24 }} spin />
                  }/>
                </div>
              </div>
            </form>
            <div className={css`
              margin-top: 40px;
              user-select: none;
              ul {
                list-style: none;
                padding: 0;
                margin: 0;
                li {
                  .sr-link {
                    padding: 12px;
                    display: block;
                    padding: 17px 27px;
                    transition: background .3s ease;
                    display: block;
                    border-radius: 5px;
                    font-size: 18px;
                    & > a {
                      color: #333;
                    }
                  }
                  .sr-link:hover {
                    background: #ececec;
                  }
                }
              }
            `}>
              <ul>
                <li>
                  <div className="sr-link">
                    <a href="#">A more complex example which define a customized footer button bar</a>
                    <ListInline/>
                  </div>
                </li>
                <li>
                  <div className="sr-link">
                    <a href="#">A more complex example which define a customized footer button bar</a>
                    <ListInline/>
                  </div>
                </li>
                <li>
                  <div className="sr-link">
                    <a href="#">A more complex example which define a customized footer button bar</a>
                    <ListInline/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default OverlaySearch