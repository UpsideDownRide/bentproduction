import React from 'react'
import PropTypes from 'prop-types'
import { GoChevronDown } from 'react-icons/go';
import Context from '../components/Context'

export const IndexPageTemplate = ({
  image,
  ...props
}) => (
    <Context.Consumer>
      {({ language }) => {
      const content = props[language]
      return (
        <React.Fragment>
          <div className="landing background-image" />
          <section className="landing hero is-fullheight">
            <div className="landing hero-body">
              <div className="container">
                <h1 className="title has-text-light is-size-1">{content.title}</h1>
                <h2 className="subtitle has-text-grey-light">{content.heading}</h2>
              </div>
            </div>
            <GoChevronDown className="down-arrow" onClick={() => alert('hey')} />
          </section>
          <section className="hero">
          </section>
        </React.Fragment>
      )}}
    </Context.Consumer>
  )

const contentShape = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

IndexPageTemplate.propTypes = {
  image: PropTypes.string,
  pl: PropTypes.shape(contentShape).isRequired,
  en: PropTypes.shape(contentShape).isRequired
}