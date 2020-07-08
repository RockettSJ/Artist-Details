import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const ArtistPopularTrack = (props) => {
  return (
    <li className="list-group-item bg-dark">
      <div className="row">
        <div className="col text-left">{props.trackName}</div>
        <div className="col text-center">{props.albumName}</div>
        <div className="col text-right">
          <a
            className="youtube-icon"
            rel="noreferrer noopener"
            target="_blank"
            href={props.trackVideoLink}
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ArtistPopularTrack;
