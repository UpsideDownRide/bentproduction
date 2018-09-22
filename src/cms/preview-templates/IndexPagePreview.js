import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => (
    <IndexPageTemplate
      image={entry.getIn(['data', 'image'])}
      pl={{
        title: entry.getIn(['data', 'titlePl']),
        heading: entry.getIn(['data', 'headingPl'])
      }}
      en={{
        title: entry.getIn(['data', 'titleEn']),
        heading: entry.getIn(['data', 'headingEn'])
      }}      
    />
)

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }),
  getAsset: PropTypes.func.isRequired,
}

export default IndexPagePreview
