import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => (
    <ProductPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
    />
)


IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func.isRequired,
  }),
  getAsset: PropTypes.func.isRequired,
}

export default IndexPagePreview
