import React from "react";
import ArtistCard from "./components/ArtistCard";
import ArtistPopularTrack from "./components/ArtistPopularTracks";
import ArtistVideo from "./components/ArtistVideo";
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
    //Todo: Will need to filter the number of objects returned, somehow
    const artistID = artistData.artists[0].idArtist;
    const fetchArtistVideos = api1 + apiKey + api_ytVideos + artistID;
    const artistVideosResponse = await fetch(fetchArtistVideos);
    const artistVideosData = await artistVideosResponse.json();
    console.log(artistVideosData);

    //Todo: Will need better handling than this
    if (artistData.artists.length === 1) {
      this.setState({
        renderComponent: true,
        bannerURL: artistData.artists[0].strArtistBanner,
        name: artistData.artists[0].strArtist,
        genre: artistData.artists[0].strGenre,
        yearFormed: artistData.artists[0].intFormedYear,
        website: artistData.artists[0].strWebsite,
        facebook: artistData.artists[0].strFacebook,
        twitter: artistData.artists[0].strTwitter,
        bio: artistData.artists[0].strBiographyEN,
        artistPopularTracks: popularTrackData.track,
        artistVideosCollection: artistVideosData.mvids,
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
            trackVideoLink={track.strMusicVid}
          />
        );
      }
    );

    //Key prop in here could be the same as the above. Not sure if safe.
    const artistVideosCollection = this.state.artistVideosCollection.map(
      (video) => {
        return <ArtistVideo key={video.idTrack} videoTrack={video.strTrack} />;
      }
    );

    return (
      <div className="App bg-dark text-light min-vh-100">
        <header></header>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Artist"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.renderComponent ? (
          <div>
            <ArtistCard
              bannerURL={this.state.bannerURL}
              artistName={this.state.name}
              genre={this.state.genre}
              yearFormed={this.state.yearFormed}
              website={this.state.website}
              facebook={this.state.facebook}
              twitter={this.state.twitter}
              bio={this.state.bio}
            />
            <ul>{artistPopularTrackList}</ul>
            <ul>{artistVideosCollection}</ul>
          </div>
        ) : (
          <h1>hi lol</h1>
        )}
      </div>
    );
  }
}

export default App;
