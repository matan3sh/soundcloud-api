const initialState = {
  defaultTracks: null,
  tracks: null,
  track: null,
  searches: [],
  mood: ['list'],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DEFAULT_TRACKS':
      return {
        ...state,
        defaultTracks: action.payload,
      };
    case 'SET_TRACKS':
      return {
        ...state,
        tracks: action.payload,
      };
    case 'CLEAR_TRACKS':
      return {
        ...state,
        tracks: null,
      };
    case 'SET_TRACK':
      return {
        ...state,
        track: action.payload,
      };
    case 'CLEAR_TRACK':
      return {
        ...state,
        track: null,
      };
    case 'SET_SEARCHES':
      return {
        ...state,
        searches: action.payload,
      };
    case 'CLEAR_SEARCHES':
      return {
        ...state,
        searches: [],
      };
    case 'SET_MOOD':
      return {
        ...state,
        mood: action.payload,
      };
    default:
      return state;
  }
}
