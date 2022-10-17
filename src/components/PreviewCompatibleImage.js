import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
   const imageStyle = { border: "none" }

  const { image, childImageSharp, alttext, imageClass, } = imageInfo
  const img = getImage(image) || image

  if (!!image && !!image.childImageSharp) {
    return (
      <>
      <GatsbyImage
        image={img}
        className={imageClass}
        style={imageStyle}
        alt={alttext}
      />
      </>
    )
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        className={imageClass}
        style={imageStyle}
        alt={alttext}
      />
    )
    // for Netlify CMS 
  } else if (img) {
    return <img className={imageClass} style={{imageStyle}} src={image} alt={alttext} />;
  } else {
    return null
  }
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alttext: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }),
}

export default PreviewCompatibleImage