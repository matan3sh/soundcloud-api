import React from 'react'
import TrackPreview from './TrackPreview'
import { connect } from 'react-redux';

const TrackList = ({ tracks, mood }) => {
    return (
        <>
            {
                mood[0] === 'list' ?
                    <div className="trackSearch__list">
                        {tracks.map((track, index) => <TrackPreview index={index} track={track} key={track.id} />)}
                    </div>
                :
                    <div className="trackSearch__list-tile">
                        {tracks.map((track, index) => <TrackPreview index={index} track={track} key={track.id} />)}
                    </div>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    mood: state.mainApp.mood,
});

export default connect(mapStateToProps, null)(TrackList);