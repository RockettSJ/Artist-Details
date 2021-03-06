import React from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInternetExplorer,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./ArtistCard.css";

//Required for screenreaders
ReactModal.setAppElement("#root");

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
      <div className="card artist-card bg-dark">
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
          <section className="card-text bio-excerpt text-justify">
            {this.props.bioExcerpt}
          </section>
          <div className="row pt-3 justify-content-center">
            <button
              className="btn btn-dark btn-outline-success text-light"
              onClick={this.handleOpenModal}
            >
              <h5 className="text-uppercase py-2">Full Biography</h5>
            </button>
            <ReactModal
              closeTimeoutMS={1000}
              isOpen={this.state.showModal}
              contentLabel="Artist's Biography Modal"
              onRequestClose={this.handleCloseModal}
              shouldCloseOnOverlayClick={true}
            >
              <div className="row justify-content-center">
                <button
                  className="btn btn-dark"
                  onClick={this.handleCloseModal}
                >
                  Close Modal
                </button>
              </div>
              <div className="container">
                <h4 className="text-uppercase text-center py-3">
                  {this.props.artistName} Biography
                </h4>
                <article className="card-text text-justify">
                  {this.props.bio}
                </article>
              </div>
            </ReactModal>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item px-2">
                <a
                  className="text-light"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={this.props.website}
                >
                  <FontAwesomeIcon icon={faInternetExplorer} />
                </a>
              </li>
              <li className="list-inline-item px-2">
                <a
                  className="text-light"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={this.props.facebook}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item px-2">
                <a
                  className="text-light"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={this.props.twitter}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
