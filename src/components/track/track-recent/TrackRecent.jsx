import React from 'react';
import { connect } from 'react-redux';
import { clearSearches } from '../../../store/actions';
import TrackRecentList from './TrackRecentList';

const TrackRecent = ({ searches, clearSearches }) => {
  return (
    <div className='trackRecent'>
      <div className='trackRecent__top'>
        <h2>
          <i className='fas fa-search-plus'></i> Recent Search
        </h2>
        <div className='trackRecent__clear'>
          <p onClick={() => clearSearches()}>
            <i className='fas fa-trash-alt'></i>
          </p>
        </div>
      </div>
      {!searches.length ? '' : <TrackRecentList searches={searches} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searches: state.mainApp.searches,
});

const mapDispatchToProps = {
  clearSearches,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackRecent);
