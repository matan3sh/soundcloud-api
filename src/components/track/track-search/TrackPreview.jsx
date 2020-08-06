import React from 'react';
import { connect } from 'react-redux';
import { setTrack, clearTrack } from '../../../store/actions';

const TrackPreview = ({ track, setTrack, currTrack, clearTrack, mood }) => {
  const durationFormatter = (duration) => {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  };

  return (
    <div
      className={`trackSearch__preview ${
        track?.id === currTrack?.id ? 'active' : ''
      }`}
      onClick={() => {
        clearTrack();
        setTimeout(() => setTrack(track), 250);
      }}
    >
      {mood[0] === 'list' ? (
        <>
          <div>
            <img src={track.artwork_url} alt='play' />
            <h3>
              {track.title.length > 25
                ? track.title.slice(0, 24) + '...'
                : track.title}
            </h3>
          </div>
          <p>
            <i className='fas fa-play'></i> {durationFormatter(track.duration)}
          </p>
        </>
      ) : (
        <div className='trackSearch__preview-tile'>
          <img src={track.artwork_url} alt='play' />
          <h3>
            {track.title.length > 25
              ? track.title.slice(0, 15) + '...'
              : track.title}
          </h3>
          <p>
            <i className='fas fa-play'></i> {durationFormatter(track.duration)}
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currTrack: state.mainApp.track,
  mood: state.mainApp.mood,
});

const mapDispatchToProps = {
  setTrack,
  clearTrack,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPreview);
