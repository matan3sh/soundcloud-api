import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadDefaultTracks, setTrack } from '../../store/actions';
import Loader from '../shared/Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7.5,
  slidesToScroll: 1,
  className: 'slides',
  responsive: [
    {
      breakpoint: 1663,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};

const HomeSlider = ({ defaultTracks, loadDefaultTracks, setTrack }) => {
  useEffect(() => {
    loadDefaultTracks();
  }, [loadDefaultTracks]);

  return (
    <>
      {defaultTracks === null ? (
        <Loader />
      ) : (
        <Slider {...settings}>
          {defaultTracks?.map((track, index) => (
            <div
              className='slider__card'
              key={index}
              onClick={() => setTrack(track)}
            >
              <img src={track.artwork_url} alt='' />
              <h3>
                {track.title.length > 22
                  ? track.title.slice(0, 21) + '...'
                  : track.title}
              </h3>
              <p>{track.genre}</p>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  defaultTracks: state.mainApp.defaultTracks,
});

const mapDispatchToProps = {
  loadDefaultTracks,
  setTrack,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider);
