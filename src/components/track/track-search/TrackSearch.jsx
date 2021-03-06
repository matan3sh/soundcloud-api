import React, { useState } from 'react';
import { connect } from 'react-redux';

import Search from './Search';
import TrackButtons from './TrackButtons';
import TrackList from './TrackList';

const TrackSearch = ({ tracks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [tracksPerPage, setTracksPerPage] = useState(6);

  let currentTracks = [];
  if (tracks !== null) {
    const indexOfLastTrack = currentPage * tracksPerPage;
    const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
    currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);
  }

  const onNextTracks = () => setCurrentPage(2);
  const onPrevTracks = () => setCurrentPage(1);

  return (
    <div className='trackSearch'>
      <Search onPrevTracks={onPrevTracks} />
      {tracks === null ? (
        ''
      ) : (
        <>
          <TrackList tracks={currentTracks} />
          <TrackButtons
            onNextTracks={onNextTracks}
            onPrevTracks={onPrevTracks}
            currentPage={currentPage}
            length={currentTracks.length}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tracks: state.mainApp.tracks,
});

export default connect(mapStateToProps, null)(TrackSearch);
