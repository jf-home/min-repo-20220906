import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Error = ({ data }) => {
  return (
      <Layout>
        <div id="sub-page">
          {/* <SEO
            title="Error 404"
            description="Oops.  We seem to have hit a problem!"
          /> */}

          Error 404.  Sorry!
        </div>

        <main></main>
      </Layout>
  )
}
export default Error

export const query = graphql`
  query {
    heroImage: file(name: { eq: "404-not-found" }) {
      childImageSharp {
        gatsbyImageData(quality: 90) 
      }
    }
  }
`