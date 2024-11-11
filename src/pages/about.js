import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Bio from '../components/bio'

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`