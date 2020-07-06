import React from "react";

const ArtistPopularTrack = (props) => {
  return (
    <li className="list-group-item bg-dark">
      <div className="row">
        <div className="col text-left">{props.trackName}</div>
        <div className="col text-center">{props.albumName}</div>
        <div className="col text-right">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.trackVideoLink}
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </li>
  );
};

export default ArtistPopularTrack;
