import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
import Layout from '../components/layout'
import HomeSpotlight from '../components/homeSpotlight'
import HomeHoriz from '../components/homeHoriz'
import HomeCard from '../components/homeCard'
import HeroHome from "../components/heroHome"


export const IndexPageTemplate = ({ title, subtitle, alttext, image, spotlight, section, insights }) => {
  const heroImage = getImage(image) || image

  return (
    <Layout>
      <div id="intro-page">
        {/* <SEO title={title} description={title} /> */}
        <HeroHome image={image} alttext={alttext} title={title} subtitle={subtitle} ctatext="Why my company?" />

      </div>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#FFFFFF" ></path>
          </svg>
        </div>
      </div>
    
      <main id="main">
        <MDBContainer className="pb-100">
          <HomeSpotlight spotlight={spotlight} />
        </MDBContainer>

        <>  
        {section &&
          <section className="bg-white-grey-gradient">
            <MDBAnimation type="fadeIn" duration="1587ms">
              <h2 className="font-alt font-w-700 text-center letter-spacing-1 mt-4 mt-xl-0 mb-5 title-xs-medium title-large" >
                Explore our offerings
              </h2>
              <MDBContainer>
                <div className="about-overview pt-5">
                  {section.map((sections, index) => {
                    return (
                      <HomeHoriz
                        key={index}
                        title={sections.title}
                        subtitle={sections.subtitle}
                        subtitleColour={ sections.subtitlecolour != 'none' ? sections.subtitlecolour : 'text-very-dark-blue' }
                        description={sections.description}
                        image={sections.image}
                        alttext={sections.alttext}
                        placement={sections.placement}
                        titleClass="font-alt font-w-400 letter-spacing-1 mb-3 title-xs-medium title-medium text-very-dark-blue"
                        subtitleClass={null}
                        link={ sections.btnlink == 'capabilities' ? '/solutions/' + sections.btnlink : '/' + sections.btnlink }
                        colour={sections.btncolour}
                      />
                    )
                  })}
                </div>
              </MDBContainer>
            </MDBAnimation>
          </section>
        } 
        </>

        <section className="bg-gray-light">
          <MDBAnimation reveal type="fadeIn" duration="1587ms" className="cms-visible">
            <MDBContainer>
              <h2 className="font-alt font-w-700 text-center letter-spacing-1 mt-4 mt-xl-0 mb-5 title-xs-medium title-large">
                {insights.title}
              </h2>
              {insights.items && (
                <MDBRow className="pt-4">
                  <>
                    {insights.items.map((item, index) => {
                      return (
                        <HomeCard
                          key={index}
                          collg="4"
                          colmd="6"
                          height="7.5rem"
                          title={item.title}
                          subtitle={item.subtitle}
                          description={item.description}
                          image={item.image}
                          alttext={item.alttext}
                          placement={item.placement}
                          link={item.link}
                          titleClass={null}
                          subClass={null}
                          descriptionClass="text-card-small"
                        />
                      )
                    })}
                  </>
                </MDBRow>
              )}
            </MDBContainer>
          </MDBAnimation>
        </section>
      </main>
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  alttext: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  spotlight: PropTypes.shape({
    title: PropTypes.string, 
    subtitle: PropTypes.string, 
    items: PropTypes.array,
  }),
  section: PropTypes.array,
  insights: PropTypes.shape({
    title: PropTypes.string, 
    items: PropTypes.array,
  }),
  }

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <IndexPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        alttext={frontmatter.alttext}
        image={frontmatter.image}
        spotlight={frontmatter.spotlight}
        section={frontmatter.section}
        insights={frontmatter.insights}
      />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage 

export const query = graphql`
  query {
    markdownRemark(frontmatter: { name: { eq: "index" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, width: 540, quality: 90) 
          }
        }
        alttext
        spotlight {
          title
          subtitle
          items {
            title
            subtitle
            image {
              childImageSharp {
                gatsbyImageData(width: 90, quality: 90) 
              }
            }
            alttext
            link
          }
        }
        section {
          title
          subtitle
          subtitlecolour
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: NONE, quality: 90)
            }
          }
          alttext
          placement
          btnlink
          btncolour
        }
        insights {
          title
          items {
            title
            subtitle
            description
            image {
              childImageSharp {
                gatsbyImageData(placeholder: NONE, quality: 90)
              }
            }
            placement
            alttext
            link
          }
        }
      }
    }
  }
`