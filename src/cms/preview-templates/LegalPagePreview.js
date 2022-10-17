import React from 'react'
import PropTypes from 'prop-types'
import { LegalPageTemplate } from '../../templates/legal'

const LegalPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <LegalPageTemplate
        title={entry.getIn(['data', 'title'])}
        date={entry.getIn(['data', 'date'])}
        alttext={entry.getIn(['data', 'alttext'])}
        image={getAsset(entry.getIn(['data', 'image']))}
        content={widgetFor('body')}
        slug={entry.getIn(['data', 'slug'])}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

LegalPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default LegalPagePreview