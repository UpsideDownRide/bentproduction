import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import './all.sass'

const Layout = ({ children }) => (
  <div>
    <Helmet title="Bent Production" />
    <Navbar />
    <div>{children}</div>
  </div>
)

Layout.Proptypes = {
  children: PropTypes.node.isRequired
}

export default Layout
