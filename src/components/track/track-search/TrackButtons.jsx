import React from 'react';
import { connect } from 'react-redux';
import { setMood } from '../../../store/actions';

const TrackButtons = ({
  onNextTracks,
  currentPage,
  onPrevTracks,
  setMood,
  length,
}) => {
  return (
    <div className='trackSearch__buttons'>
      {currentPage === 1 ? (
        <span onClick={() => onNextTracks()}>
          <i
            className={`fas fa-long-arrow-alt-right ${
              length < 6 ? 'disabled' : ''
            }`}
          ></i>
        </span>
      ) : (
        <span onClick={() => onPrevTracks()}>
          <i className='fas fa-long-arrow-alt-left'></i>
        </span>
      )}
      <div>
        <span onClick={() => setMood(['list'])}>
          <i className='fas fa-bars'></i>
        </span>
        <span onClick={() => setMood(['til'])}>
          <i className='fas fa-th-list'></i>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setMood,
};

export default connect(null, mapDispatchToProps)(TrackButtons);
