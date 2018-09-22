import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Navbar from '../components/Navbar'
import './all.sass'
import { LanguageProvider } from './Context'

const Layout = ({ children }) => (
    <LanguageProvider>
      <Helmet title="Bent Production" />
      <Navbar />
      <div>{children}</div>
    </LanguageProvider>
)

Layout.Proptypes = {
  children: PropTypes.node.isRequired
}

export default Layout
