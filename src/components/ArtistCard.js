import React from "react";

const ArtistCard = (props) => {
  return (
    <div className="artist-container">
      <img src={props.bannerURL} alt="" />
      <h2>{props.artistName}</h2>
      <h4>{props.genre}</h4>
      <h4>{props.yearFormed}</h4>
      <a rel="noreferrer noopener" href={props.website}>
        Website
      </a>
      <a rel="noreferrer noopener" href={props.facebook}>
        Facebook
      </a>
      <a rel="noreferrer noopener" href={props.twitter}>
        Twitter
      </a>
      <section>{props.bio}</section>
    </div>
  );
};

export default ArtistCard;
