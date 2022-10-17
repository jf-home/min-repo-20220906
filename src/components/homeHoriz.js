import React from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const HomeHoriz = ({ title, subtitle, subtitleColour, description, image, alttext, placement, titleClass, subtitleClass, link, colour  }) => (

  <MDBRow
        className={`alt-area ${
          placement === 'right' ? 'flex-row-reverse' : ''
        }`}
      >
        <MDBCol lg="6" className="alt-right grow" style={{backgroundColor: "#bbcfde"}}>
          <Link to={link} aria-label={title}>
            <PreviewCompatibleImage imageInfo={{ image: image, alttext: alttext, imageClass: 'alt-bg-image', }} />
          </Link>
        </MDBCol>

        <MDBCol lg="6" className="alt-left bg-color">
          <div className="alt-content">
            <h3
              className={
                titleClass != null
                  ? titleClass
                  : 'font-alt font-w-700 letter-spacing-1 mb-3 title-xs-medium title-medium text-very-dark-blue'
              }
            >
              {title}
            </h3>
            {subtitle != null && (
              <h4
                className={
                  subtitleClass != null
                    ? subtitleClass
                    : `font-alt font-w-700 letter-spacing-1 mb-4 title-xs-medium title-large ${subtitleColour}`
                }
              >
                {subtitle}
              </h4>
            )}
            <div
              className="mt-3 font-w-400 text-medium"
              style={{ whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {link ? (
              link.charAt(0) == '/' ? (
                <Link
                  to={link}
                  className={`mt-4 ${colour}`}
                  aria-label={title}
                >
                  <FontAwesomeIcon icon={faChevronRight} className="cms-fa1" />
                </Link>
              ) : (
                <a
                  href={link}
                  className={`mt-4 ${colour}`}
                  target="_blank"
                  rel="noopener"
                  aria-label={title}
                >
                  <FontAwesomeIcon icon={faChevronRight} className="cms-fa1" />
                </a>
              )
            ) : null}
          </div>
        </MDBCol>
      </MDBRow>
    )

    HomeHoriz.propTypes = {
      placement: PropTypes.string, 
      title: PropTypes.string,
      subtitle: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alttext: PropTypes.string,
      titleClass: PropTypes.string,
      subtitleClass: PropTypes.string,
      description: PropTypes.string,
      colour:PropTypes.string,
    }
    
export default HomeHoriz