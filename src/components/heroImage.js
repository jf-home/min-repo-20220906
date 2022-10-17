import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function heroImage(props) {
  const { img, alttext, title, imgPosition = "center", } = props

  return (
    <React.Fragment>
      <section
        className="intro-65"
        style={{
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <div style={{ display: 'grid', alignItems: 'center' }}>
          {img?.url ? (
            <img
              src={img}
              objectPosition={imgPosition}
              style={{ gridArea: '1/1', maxHeight: '65vh', width: '100%', objectFit: 'cover' }}
              alt={alttext}
            />
          ) : (
            <GatsbyImage
              image={img}
              objectFit={'cover'}
              objectPosition={imgPosition}
              style={{ gridArea: '1/1', maxHeight: '65vh' }}
              layout="fullWidth"
              alt={alttext}
              formats={['auto', 'webp', 'avif']}
            />
          )}
          <div className="gradient">
            {title && (
              <div className="white-text text-center col-md-12 mt-xl-2">
                <h1
                  className="font-alt font-w-700 text-yellow title-xs-extra-large title-extra-large-1 mt-sm-5 mb-xl-4"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

heroImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}