import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTracks, loadSearches, loadMood } from '../../store/actions';

import Loader from '../shared/Loader';
import TrackSearch from '../track/track-search/TrackSearch';
import TrackImage from '../track/track-image/TrackImage';
import TrackRecent from '../track/track-recent/TrackRecent';

const Home = ({ loadTracks, tracks, loadSearches, loadMood }) => {
  useEffect(() => {
    // setTimeout(() => loadTracks(), 1000);
    loadSearches();
    loadMood();
    // eslint-disable-next-line
  }, [loadTracks]);

  return (
    <div className='home'>
      <div className='home__container'>
        {/* {tracks === null ? (
          <Loader />
        ) : (
          <> */}
        <TrackSearch />
        <TrackImage />
        <TrackRecent />
        {/* </>
        )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tracks: state.mainApp.tracks,
});

const mapDispatchToProps = {
  loadTracks,
  loadSearches,
  loadMood,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
