import React from "react";

const ArtistVideo = (props) => {
  return (
    <div className="card video-card bg-dark">
      <img
        className="card-img-top"
        src={props.thumbImg}
        alt="Video thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">{props.videoTrack}</h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default ArtistVideo;
