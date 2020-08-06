import React from 'react'
import TrackRecentPreview from './TrackRecentPreview'

const TrackRecentList = ({searches}) => {
    return (
        <div>
            {searches.map((search, index)=><TrackRecentPreview key={index} search={search} />)}
        </div>
    )
}

export default TrackRecentList
