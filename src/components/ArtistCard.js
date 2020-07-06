import React from "react";
import ReactModal from "react-modal";

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="card bg-dark">
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <div className="container">
            <article className="card-text text-justify">
              {this.props.bio}
            </article>
          </div>
        </ReactModal>
        <img
          className="card-img-top"
          src={this.props.bannerURL}
          alt="artist banner"
        />
        <div className="card-body container px-5">
          <div className="row">
            <div className="col">
              <p className="text-left">{this.props.genre}</p>
            </div>
            <div className="col">
              <p className="text-right">{this.props.yearFormed}</p>
            </div>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={this.props.website}
            >
              Website
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={this.props.facebook}
            >
              Facebook
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={this.props.twitter}
            >
              Twitter
            </a>
            <article className="card-text text-justify">
              {this.props.bio}
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
