import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadTracks, setSearches } from '../../../store/actions';

const Search = ({ loadTracks, searches, setSearches }) => {
  const [text, setText] = useState('');

  const onSearchTracks = () => {
    loadTracks(text);
    let updatedSearches = [text, ...searches];
    setSearches(updatedSearches);
  };

  return (
    <>
      <div className='trackSearch__search'>
        <input
          type='text'
          placeholder='Search Track'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={onSearchTracks}>GO</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  searches: state.mainApp.searches,
});

const mapDispatchToProps = {
  loadTracks,
  setSearches,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
