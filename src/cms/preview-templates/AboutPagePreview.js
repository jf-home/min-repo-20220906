import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about'

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    alttext={entry.getIn(['data', 'alttext'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AboutPagePreview