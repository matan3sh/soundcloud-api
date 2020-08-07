import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadTracks, setSearches, clearTracks } from '../../../store/actions';

const Search = ({
  loadTracks,
  searches,
  setSearches,
  clearTracks,
  onPrevTracks,
}) => {
  const [text, setText] = useState('');

  const onSearchTracks = () => {
    onPrevTracks();
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
      <small
        className='trackSearch__clear'
        onClick={() => {
          setText('');
          clearTracks();
        }}
      >
        <i className='fas fa-trash-alt'></i>
      </small>
    </>
  );
};

const mapStateToProps = (state) => ({
  searches: state.mainApp.searches,
});

const mapDispatchToProps = {
  loadTracks,
  setSearches,
  clearTracks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
