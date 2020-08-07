import React from 'react';
import TrackPreview from './TrackPreview';
import { connect } from 'react-redux';

const TrackList = ({ tracks, mood, track }) => {
  return (
    <>
      {mood[0] === 'list' ? (
        <div className='trackSearch__list'>
          {track !== null && (
            <p>
              <i className='fas fa-play-circle'></i>Now Playing -{' '}
              {track.title.length > 36
                ? track.title.slice(0, 35) + '...'
                : track.title}
            </p>
          )}
          {tracks.map((track, index) => (
            <TrackPreview index={index + 1} track={track} key={track.id} />
          ))}
        </div>
      ) : (
        <div className='trackSearch__list-tile'>
          {tracks.map((track, index) => (
            <TrackPreview track={track} key={track.id} />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  mood: state.mainApp.mood,
  track: state.mainApp.track,
});

export default connect(mapStateToProps, null)(TrackList);
