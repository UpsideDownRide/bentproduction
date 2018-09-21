import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { IndexPageTemplate } from '../templates/index-page'

const IndexPage = ({ data: { markdownRemark: { frontmatter: {
  image,
  titleEn,
  headingEn,
  titlePl,
  headingPl,
} } } }) => (
    <Layout>
      <IndexPageTemplate
        image={image}
        en={{
          title: titleEn,
          heading: headingEn
        }}
        pl={{
          title: titlePl,
          heading: headingPl
        }}
      />
    </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default IndexPage

export const indexPageQuery = graphql`
  query indexPage {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        titleEn
        headingEn
        titlePl
        headingPl
        image
        templateKey
      }
    }
  }
`