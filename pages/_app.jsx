import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import store from '../store'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default MyApp