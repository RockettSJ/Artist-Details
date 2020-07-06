import React from "react";

const ArtistVideo = (props) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 py-2">
      <a
        className="text-light text-decoration-none"
        target="_blank"
        rel="noopener noreferrer"
        href={props.videoLink}
      >
        <div className="card video-card bg-dark">
          <img
            className="card-img-top"
            src={props.thumbImg}
            alt="Video thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{props.videoTrack}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArtistVideo;
