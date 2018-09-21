import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { LandingPageTemplate } from '../templates/index-page'

const IndexPage = ({ data: { markdownRemark: { frontmatter: {
  image,
  title,
  heading
} } } }) => (
    <Layout>
      <LandingPageTemplate
        image={image}
        title={title}
        heading={heading}
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
        title
        image
        heading
        templateKey
      }
    }
  }
`