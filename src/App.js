import React from "react";
import ArtistCard from "./components/ArtistCard/ArtistCard";
import ArtistPopularTrack from "./components/PopularTracks/ArtistPopularTracks";
import ArtistVideo from "./components/ArtistVideo/ArtistVideo";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      artistPopularTracks: [],
      artistVideosCollection: [],
      renderComponent: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  bio_truncate(string, length, ending) {
    if (length == null) {
      length = 700;
    }
    if (ending == null) {
      ending = "...";
    }
    if (string.length > length) {
      return string.substring(0, length - ending.length) + ending;
    } else {
      return string;
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const artist = this.state.value;
    const api1 = "https://www.theaudiodb.com/api/v1/json/";
    const apiKey = process.env.REACT_APP_MY_API_KEY;
    const api2 = "/search.php?s=";
    const api_popularTracks = "/track-top10.php?s=";
    const api_ytVideos = "/mvid.php?i=";

    const fetchArtist = api1 + apiKey + api2 + artist;
    const fetchArtistPopularTracks = api1 + apiKey + api_popularTracks + artist;

    const response = await fetch(fetchArtist);
    const artistData = await response.json();
    console.log(artistData);

    //Todo: Make a new component to map the array and display this data
    const popularTrackResponse = await fetch(fetchArtistPopularTracks);
    const popularTrackData = await popularTrackResponse.json();
    console.log(popularTrackData);

    //Will use this ID for other stuff including fetching the artist's youtube videos
    const artistID = artistData.artists[0].idArtist;
    const fetchArtistVideos = api1 + apiKey + api_ytVideos + artistID;
    const artistVideosResponse = await fetch(fetchArtistVideos);
    const artistVideosData = await artistVideosResponse.json();

    //Return a maximum of 20 videos
    const artistVideosLimited = artistVideosData.mvids.slice(0, 20);
    console.log(artistVideosData);

    //Todo: Will need better handling than this
    if (artistData.artists.length) {
      const bioExcerpt = this.bio_truncate(
        artistData.artists[0].strBiographyEN
      );
      const artistWebsite = "https://" + artistData.artists[0].strWebsite;
      const artistFb = "https://" + artistData.artists[0].strFacebook;
      const artistTwitter = "https://" + artistData.artists[0].strTwitter;

      this.setState({
        bannerURL: artistData.artists[0].strArtistBanner,
        name: artistData.artists[0].strArtist,
        genre: artistData.artists[0].strGenre,
        yearFormed: artistData.artists[0].intFormedYear,
        website: artistWebsite,
        facebook: artistFb,
        twitter: artistTwitter,
        bioExcerpt: bioExcerpt,
        bio: artistData.artists[0].strBiographyEN,
        artistPopularTracks: popularTrackData.track,
        artistVideosCollection: artistVideosLimited,
        renderComponent: true,
      });
    } else {
      this.setState({ renderComponent: false });
    }
  };

  render() {
    const artistPopularTrackList = this.state.artistPopularTracks.map(
      (track) => {
        return (
          <ArtistPopularTrack
            key={track.idTrack}
            trackName={track.strTrack}
            albumName={track.strAlbum}
            trackVideoLink={track.strMusicVid}
          />
        );
      }
    );

    //Key prop in here could be the same as the above. Not sure if safe.
    const artistVideosCollection = this.state.artistVideosCollection.map(
      (video) => {
        return (
          <ArtistVideo
            key={video.idTrack}
            thumbImg={video.strTrackThumb}
            videoTrack={video.strTrack}
            videoLink={video.strMusicVid}
          />
        );
      }
    );

    return (
      <div className="App text-light min-vh-100">
        <header className="site-header">
          <div className="container text-center">
            <h1 className="text-uppercase py-4">Artist Pages</h1>
          </div>
        </header>
        <main className="container mt-3">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                aria-label="Search for an Artist"
                type="text"
                placeholder="Search for an artist or band"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success btn-dark text-light"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {this.state.renderComponent ? (
            <div className="row mt-3">
              <div className="col-lg-6 col-md-12 mb-md-3">
                <ArtistCard
                  bannerURL={this.state.bannerURL}
                  artistName={this.state.name}
                  genre={this.state.genre}
                  yearFormed={this.state.yearFormed}
                  website={this.state.website}
                  facebook={this.state.facebook}
                  twitter={this.state.twitter}
                  bio={this.state.bio}
                  bioExcerpt={this.state.bioExcerpt}
                />
              </div>
              <div className="col-lg-6 col-md-12 popularTracks">
                <ul className="list-group">
                  <div className="title-header">
                    <h3 className="py-2 pl-2 text-uppercase">
                      Their popular tracks
                    </h3>
                  </div>
                  <div className="container">
                    <div className="row bg-dark py-2">
                      <div className="col text-left">
                        <h4>Track</h4>
                      </div>
                      <div className="col text-center">
                        <h4>Album</h4>
                      </div>
                      <div className="col text-right">
                        <h4>Video</h4>
                      </div>
                    </div>
                  </div>
                  {artistPopularTrackList}
                </ul>
              </div>

              <div className="videos mt-5">
                <div className="title-header">
                  <h3 className="py-2 pl-2 text-uppercase">
                    More of their videos
                  </h3>
                </div>
                <div className="row justify-content-center">
                  {artistVideosCollection}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="my-5 instruction-text">
                Search for an artist to view their details, biography, popular
                tracks and videos!
              </p>
              <div className="warning-text">
                <h4 className="text-uppercase">Please be aware:</h4>
                <p>
                  Some artists are missing from the database as this app
                  utilizes an external API. Please consider searching for
                  another artist if the app throws an error.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
