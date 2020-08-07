import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTracks, loadSearches, loadMood } from '../../store/actions';

import TrackSearch from '../track/track-search/TrackSearch';
import TrackImage from '../track/track-image/TrackImage';
import TrackRecent from '../track/track-recent/TrackRecent';
import Slider from '../layout/Slider';

const Home = ({ loadTracks, tracks, loadSearches, loadMood }) => {
  useEffect(() => {
    loadSearches();
    loadMood();
    // eslint-disable-next-line
  }, [loadTracks]);

  return (
    <div className='home'>
      <h2>Top Tracks</h2>
      <Slider />
      <div className='home__container'>
        <TrackSearch />
        <TrackImage />
        <TrackRecent />
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
