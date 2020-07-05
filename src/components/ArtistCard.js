import React from "react";

const ArtistCard = (props) => {
  return (
    <div className="artist-container card bg-dark">
      <img className="card-img-top" src={props.bannerURL} alt="artist banner" />
      <div className="card-body">
        <div className="row text-center">
          <div className="col">
            <h5 className="card-title">{props.artistName}</h5>
          </div>
          <div className="col">
            <p>{props.genre}</p>
          </div>
          <div className="col">
            <p>{props.yearFormed}</p>
          </div>
        </div>

        <a rel="noreferrer noopener" target="_blank" href={props.website}>
          Website
        </a>
        <a rel="noreferrer noopener" target="_blank" href={props.facebook}>
          Facebook
        </a>
        <a rel="noreferrer noopener" target="_blank" href={props.twitter}>
          Twitter
        </a>
        <section className="card-text">{props.bio}</section>
      </div>
    </div>
  );
};

export default ArtistCard;
