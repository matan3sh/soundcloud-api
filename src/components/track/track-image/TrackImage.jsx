import React from 'react'
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops'

const TrackImage = ({ track }) => {
    return (
        <div className="trackImage">
            {track === null ?
                ''
                :
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                    {props => (
                        <div style={props}>
                            <img src={track.artwork_url} alt={track.license} />
                            <iframe
                                width="100%"
                                height="166"
                                scrolling="no"
                                frameBorder="no"
                                title={track.title}
                                allow="autoplay"
                                src={`https://w.soundcloud.com/player/?url=${track.uri}`}
                            />
                        </div>
                    )}
                </Spring>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    track: state.mainApp.track,
});

export default connect(mapStateToProps, null)(TrackImage);
