import React from 'react'
import PropTypes from 'prop-types'
import { MDBCol, MDBCard, MDBCardBody, MDBCardText } from 'mdbreact'
import Link from 'gatsby-link'
import PreviewCompatibleImage from "./PreviewCompatibleImage"

// class Card extends React.Component {
const HomeCard = ({ collg, colmd, height, title, subtitle, description, image, alttext, placement, link, titleClass, subClass, descriptionClass }) => {
    const colHeight = height != null ? height : 'auto'

    return (
      <MDBCol lg={collg} md={colmd} className="pb-4 d-flex" >
        <MDBCard className="flex-fill">
          <PreviewCompatibleImage imageInfo={{ image: image, alttext: alttext, overlay: 'white-slight', }} />
          <MDBCardBody>
            <div style={{ maxHeight: colHeight, minHeight: colHeight }}>
              <h3 className={`font-alt font-w-700 mt-2 letter-spacing-1 ` + (titleClass ? titleClass : `title-small title-xs-medium`)}>
                {title}
              </h3>
              {subtitle != '' && subtitle != null && (
                <h4 
                  className={subClass ? 
                    "font-w-400 text-xs-medium text-medium-small mt-2" : 
                    "font-w-400 text-xs-medium text-medium mt-2"} 
                  dangerouslySetInnerHTML={{__html: subtitle}} 
                />
              )}
            </div>
            <hr />
            {link ? (
              <MDBCardText className={`font-w-400 mt-2 mb-2 ` + descriptionClass ? descriptionClass : 'text-medium'}>
                {(link.substring(0, 4) != 'http' && link.substring(0, 8) != '/static/') ? (
                  <Link to={(link.indexOf('?') > -1 || link.slice(-1) == "/") ? link : '' + link + '/'} className="effect">
                    {description}
                  </Link>
                ) : (
                  <a href={link} className="effect" target="_blank" rel="noopener" >
                    {description}
                  </a>
                )}
              </MDBCardText>
            ) : (
              <MDBCardText className="font-w-400 text-medium mt-2 mb-2"></MDBCardText>
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  )
}

    HomeCard.propTypes = {
      collg: PropTypes.string, 
      colmd: PropTypes.string,
      height: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alttext: PropTypes.string,
      placement: PropTypes.string,
      link: PropTypes.string,
      titleClass: PropTypes.string,
      subClass: PropTypes.string,
      descriptionClass: PropTypes.string,
    }

export default HomeCard