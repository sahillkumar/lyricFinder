import React, { Component } from "react";
import axios from "axios";
// import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";

class Lyrics extends Component {
  state = {
    lyrics: {},
    track: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${this.props.match.params.id}&apikey=46a908cae9e6fe663a1fe8ef339f08f6`
      )
      .then((res) => {
        this.setState({
          lyrics: res.data.message.body.lyrics,
        });
        return axios.get(
          `https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${this.props.match.params.id}&apikey=46a908cae9e6fe663a1fe8ef339f08f6`
        );
      })
      .then((res) => {
        this.setState({
          track: res.data.message.body.track,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { lyrics, track } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(lyrics).length === 0 ||
      Object.keys(track).length === 0
    ) {
      return <br />;
    } else {
      return (
        <div className="col-10 offset-md-1">
          <Link to="/" className="btn btn-dark mb-4 px-4">
            {" "}
            Go Back
          </Link>

          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">{lyrics.lyrics_body}</div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album : </strong>
              {track.album_name}
            </li>
            <li className="list-group-item">
              <strong>Genre : </strong>
              {track.primary_genres.music_genre_list.length === 0
                ? ""
                : track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Explicit Content : </strong>
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Lyrics;
