import React, { useState } from 'react'
import { connect } from 'react-redux';

import Search from './Search'
import TrackButtons from './TrackButtons'
import TrackList from './TrackList';

const TrackSearch = ({ tracks }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [tracksPerPage, setTracksPerPage] = useState(6);

    const indexOfLastTrack = currentPage * tracksPerPage;
    const indexOfFirstTrack = indexOfLastTrack - tracksPerPage
    const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack)

    const onNextTracks = () => setCurrentPage(2)
    const onPrevTracks = () => setCurrentPage(1)
    
    return (
        <div className="trackSearch">
            <Search />
            { tracks[0] === '' ? <h3>Track Not Found</h3> : <TrackList tracks={currentTracks} /> }
            <TrackButtons onNextTracks={onNextTracks} onPrevTracks={onPrevTracks} currentPage={currentPage} />
        </div>
    )
}

const mapStateToProps = (state) => ({
  tracks: state.mainApp.tracks,
});

export default connect(mapStateToProps, null)(TrackSearch);
