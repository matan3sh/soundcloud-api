import React from 'react';

const Loader = () => (
  <img
    src='https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif'
    alt='Loading...'
    style={loaderStyle}
  />
);

const loaderStyle = {
  margin: 'auto',
  display: 'flex',
  width: '100px',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Loader;
