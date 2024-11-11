import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Bio from '../components/bio'

const ThankYouPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <p>Thank you for your submission!</p>
      <hr />
      <Bio />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact"/>

export default ThankYouPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`