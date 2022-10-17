import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { MDBRow, MDBCol } from 'mdbreact'
import { MDBAnimation } from 'mdbreact'
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const HomeSpotlight = ({ spotlight }) => ( 
      <>
        <MDBRow>
          <MDBCol lg="12">
            <MDBAnimation reveal type="fadeInUp" className="cms-visible">
              <div className="features-absolute rounded bg-white">
                <MDBRow>
                  <MDBCol lg="12" md="12" className="my-4 pb-4">
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="d-flex p-4">
                          <div className="flex-1">
                            <h1
                              className="font-alt font-w-200 text-center title-xs-small title-large mb-xl-2 mx-3"
                              dangerouslySetInnerHTML={{ __html: spotlight.title }}
                            />
                          </div>
                        </div>
                      </MDBCol>

                      <MDBCol md="12">
                        <div className="d-flex">
                          <div className="flex-1">
                            <h2
                              className="font-w-700 text-center font-alt mb-4 mx-3 pb-4 letter-spacing-1 title-xs-large"
                              dangerouslySetInnerHTML={{ __html: spotlight.subtitle }}
                            />
                          </div>
                        </div>
                      </MDBCol>

                      {spotlight.items.map((item, index) => {

                        return (
                          <MDBCol lg="3" md="6" className="text-center mt-3" key={index}>
                            <div className="d-flex p-0 pt-5 pt-lg-0">
                              <div className="flex-1">
                                <Link to={item.link} className="text-medium-small">
                                  <PreviewCompatibleImage imageInfo={{ image: item.image, alttext: item.alttext, imageClass: 'alt-bg-image', }} />
                                </Link>
                                <h3 className="font-alt font-w-700 title-extra-small py-4">{item.title}</h3>
                                <Link to={item.link} className="text-medium-small effect">{item.subtitle}</Link>
                              </div>
                            </div>
                          </MDBCol>
                        )
                      })}
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </>
)

HomeSpotlight.propTypes = {
  spotlight: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object)
    })
}


export default HomeSpotlight