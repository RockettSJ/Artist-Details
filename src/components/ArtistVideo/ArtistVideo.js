import React from "react";
import "./images/video-thumb-placeholder.png";
import "./ArtistVideo.css";

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
          {/* If the response data returns an image for a thumbnail, use it as img src, otherwise use the placeholder image */}
          {props.thumbImg ? (
            <img
              className="card-img-top"
              src={props.thumbImg}
              alt="Video thumbnail"
            />
          ) : (
            <img
              className="card-img-top"
              src={require("./images/video-thumb-placeholder.png")}
              alt="Video thumbnail"
            />
          )}

          <div className="card-body">
            <h5 className="card-title text-center">{props.videoTrack}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArtistVideo;
