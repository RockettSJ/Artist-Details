import React from "react";

const ArtistPopularTrack = (props) => {
  return (
    <li>
      {props.trackName}
      <a href={props.trackVideoLink}>Watch on Youtube</a>
    </li>
  );
};

export default ArtistPopularTrack;
