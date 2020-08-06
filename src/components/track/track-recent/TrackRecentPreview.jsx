import React from 'react'
import { connect } from 'react-redux';
import { loadTracks } from '../../../store/actions'

const TrackRecentPreview = ({search, loadTracks}) => {
    return (
        <div className="trackRecent__search" onClick={()=> loadTracks(search)}>
            <h3><span><i className='material-icons'>mouse</i></span> {search}</h3>
        </div>
    )
}

const mapDispatchToProps = {
  loadTracks
};

export default connect(null, mapDispatchToProps)(TrackRecentPreview);