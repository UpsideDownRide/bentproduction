import React from 'react'
import PropTypes from 'prop-types'
import { GoChevronDown } from 'react-icons/go';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
}) => (
    <React.Fragment>
      <div className="landing background-image" />
      <section className="landing hero is-fullheight">
        <div className="landing hero-body">
          <div className="container">
            <h1 className="title has-text-light is-size-1">{title}</h1>
            <h2 className="subtitle has-text-grey-light">{heading}</h2>
          </div>
        </div>
        <GoChevronDown className="down-arrow" onClick={() => alert('hey')} />
      </section>
    </React.Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
}