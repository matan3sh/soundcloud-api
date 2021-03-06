import service from '../services/service';
import { Storage } from '../services/storageService';

export const loadDefaultTracks = (filter = '') => async (dispatch) => {
  try {
    let res = Storage.loadFromStorage('tracks');
    if (!res) {
      res = await service.query(filter);
      Storage.storeToStorage('tracks', res);
    }
    dispatch({ type: 'SET_DEFAULT_TRACKS', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const loadTracks = (filter = '') => async (dispatch) => {
  try {
    let res = await service.query(filter);
    dispatch({ type: 'SET_TRACKS', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const clearTracks = () => (dispatch) => {
  dispatch({ type: 'CLEAR_TRACKS' });
};

export const setTrack = (track) => (dispatch) => {
  dispatch({ type: 'SET_TRACK', payload: track });
};

export const clearTrack = () => (dispatch) => {
  dispatch({ type: 'CLEAR_TRACK' });
};

export const loadSearches = () => (dispatch) => {
  try {
    let res = Storage.loadFromStorage('searches');
    if (!res) {
      res = [];
      Storage.storeToStorage('searches', res);
    }
    dispatch({ type: 'SET_SEARCHES', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const setSearches = (searches) => (dispatch) => {
  let recentSearches = searches.slice(0, 5);
  Storage.storeToStorage('searches', recentSearches);
  dispatch({ type: 'SET_SEARCHES', payload: recentSearches });
};

export const clearSearches = () => (dispatch) => {
  Storage.storeToStorage('searches', []);
  dispatch({ type: 'CLEAR_SEARCHES' });
};

export const loadMood = () => (dispatch) => {
  try {
    let res = Storage.loadFromStorage('mood');
    if (!res) {
      res = ['list'];
      Storage.storeToStorage('mood', res);
    }
    dispatch({ type: 'SET_MOOD', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const setMood = (mood) => (dispatch) => {
  Storage.storeToStorage('mood', mood);
  dispatch({ type: 'SET_MOOD', payload: mood });
};
