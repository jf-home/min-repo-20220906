import React from 'react'
import PropTypes from 'prop-types'
import { MDBMask, MDBRow, MDBCol,MDBView, MDBContainer, MDBBtn } from 'mdbreact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,  } from '@fortawesome/free-solid-svg-icons'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const homeHero = ({ image, alttext, title, subtitle, ctatext, }) => {
  function handleClick(value) {
    console.log(value)
    typeof window !== 'undefined' &&
      document.querySelector(value).scrollIntoView({
        behavior: 'smooth',
      })
  }

    return (
      <section className="home-110">
        <MDBView>
          <MDBMask
            className={ 'mask d-flex justify-content-center align-items-center gradient' }
          >
            <MDBContainer>
              <MDBRow>
                  <>
                    <MDBCol lg="6" className="my-auto text-lg-left text-center text-white" >
                      <h1
                        className="font-alt font-w-700 text-white title-xs-extra-large title-extra-large-1 mb-5 mb-xl-5"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <h2
                        className="font-alt font-w-400 mb-5 title-xs-small title-small letter-spacing-1"
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                      />
                      <MDBBtn
                        className="btn btn-hero-color btn-sm-block mr-0 mt-xl-2"
                        value="Why Macro 4?"
                        onClick={() => handleClick("#scrollto") }
                      >
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="mr-2 cms-fa1"
                        />{' '}
                        {ctatext != '' && ctatext != null ? ctatext : 'Read'}
                      </MDBBtn>
                    </MDBCol>
                  </>

                  {image && image != '' &&  (
                  <MDBCol lg="6" className="mt-5 mt-lg-0 pl-lg-5 hero-image">
                    <div className="d-lg-block">
                     <div
                        className="Tilt"
                        style={{ height: 500, width: 500 }}
                      >
                        <PreviewCompatibleImage imageInfo={{ image: image, alttext: alttext, imageClass: 'img-fluid d-lg-block cms-visible', }} />
                      </div>
                    </div>
                  </MDBCol>
                )}
              </MDBRow>
            </MDBContainer>
            <div id="scrollto">&nbsp;</div>
          </MDBMask>
        </MDBView>
      </section>
    )
  // }
}

homeHero.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    alttext: PropTypes.string,
  }

  export default homeHero