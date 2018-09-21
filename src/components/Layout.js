import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import './all.sass'
import Context from './Context'

class Layout extends React.Component {

  state = {
    language: "en",
    setLanguage: str => this.setState({ language: str })
  }

  render() {
    return (
      <Context.Provider value={this.state} >
        <Helmet title="Bent Production" />
        <Navbar />
        <div>{this.props.children}</div>
      </Context.Provider>
    )
  }
}

Layout.Proptypes = {
  children: PropTypes.node.isRequired
}

export default Layout
