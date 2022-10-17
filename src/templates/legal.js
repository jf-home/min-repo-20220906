import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroImage from "../components/heroImage"
import Content, { HTMLContent } from '../components/Content'


// eslint-disable-next-line
export const LegalPageTemplate = ({ title, date, alttext, image, content, contentComponent, slug }) => {
  const PageContent = contentComponent || Content
  const heroImage = getImage(image) || image

  return (
    <Layout>
      <div id="sub-page">
        {/* <SEO title={title} description={'My site legal notice'} /> */}

        <HeroImage img={heroImage} alttext={alttext} title={title} />
      </div>

      <section className="bg-white">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className="font-alt font-w-700 letter-spacing-1 text-medium">
                {`Last updated: ${date}`}
              </p>

              <PageContent className="content" content={content} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
     </Layout>
  )
}

LegalPageTemplate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  alttext: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  slug: PropTypes.string,
  }

const LegalPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <LegalPageTemplate
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        alttext={post.frontmatter.alttext}
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
        slug={post.fields.slug}
      />
  )
}

LegalPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LegalPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "legal" } }
    ) {
      fields {
        slug 
      }
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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