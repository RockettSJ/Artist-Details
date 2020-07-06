import React from "react";

const ArtistCard = (props) => {
  return (
    <div className="card bg-dark">
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
        <div className="container ">
          <a rel="noreferrer noopener" target="_blank" href={props.website}>
            Website
          </a>
          <a rel="noreferrer noopener" target="_blank" href={props.facebook}>
            Facebook
          </a>
          <a rel="noreferrer noopener" target="_blank" href={props.twitter}>
            Twitter
          </a>
          <article className="card-text text-justify">{props.bio}</article>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
