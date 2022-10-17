import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../pages/index'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  const entrySpotlight = entry.getIn(['data', 'spotlight', 'items'])
  const spotlightItems = entrySpotlight ? entrySpotlight.toJS() : []

  const entrySection = entry.getIn(['data', 'section'])
  const sectionItems = entrySection ? entrySection.toJS() : []

  const entryInsights = entry.getIn(['data', 'insights', 'items'])
  const insightsItems = entryInsights ? entryInsights.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        title={entry.getIn(['data', 'title'])}
        subtitle={entry.getIn(['data', 'subtitle'])}
        alttext={entry.getIn(['data', 'alttext'])}
        image={getAsset(entry.getIn(['data', 'image']))}
        spotlight={{
            title: entry.getIn(['data', 'spotlight', 'title']),
            subtitle: entry.getIn(['data', 'spotlight', 'subtitle']),
            items: spotlightItems
        }}
        section={sectionItems}
        insights={{
            title: entry.getIn(['data', 'insights', 'title']),
            items: insightsItems
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview