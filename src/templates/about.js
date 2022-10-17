import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { MDBContainer, MDBRow } from 'mdbreact'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroImage from "../components/heroImage"
import Content, { HTMLContent } from '../components/Content'


// eslint-disable-next-line
export const AboutPageTemplate = ({ title, alttext, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const heroImage = getImage(image) || image

  return (
    <Layout>
      <div id="sub-page">
        {/* <SEO
          title={title}
          description={"About my site"}
        /> */}

        <HeroImage img={heroImage} alttext={alttext} title={title} />
      </div>

      <main>
        <section className="bg-white">
          <MDBContainer>
            <MDBRow>
              <h2 className="font-alt font-w-700 letter-spacing-1 title-xs-medium title-large">
                {title}
              </h2>
              <PageContent className="mt-3 richtext divlink" content={content} />
            </MDBRow>
          </MDBContainer>
        </section>
      </main>
    </Layout>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  alttext: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  }

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <AboutPageTemplate
        title={post.frontmatter.title}
        alttext={post.frontmatter.alttext}
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
      />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "about" } }
    ) {
      html
      frontmatter {
        title
        alttext
        image {
          childImageSharp {
            gatsbyImageData(quality: 90) 
          }
        }
      }
    }
  }
`