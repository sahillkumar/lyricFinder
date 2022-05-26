import React from 'react'
import { Link } from 'react-router-dom'

function Track({track}) {
    // console.log(track);
    return (
        <div className="col-md-5">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4>{track.track.track_name}</h4>
                    <p className="card-text">
                        <strong><i className="fas fa-play"/> Album </strong> : {track.track.album_name}
                        <br/>
                        <strong><i className="fas fa-user"/> Artist </strong> : {track.track.artist_name}
                    </p>
                </div>
                <Link to={`/track/lyrics/${track.track.commontrack_id}`} className="btn btn-dark  btn-block m-3" style={{ cursor:'pointer'}}>
                        <i className="fas fa-chevron-right"/> View Lyrics
                </Link>
            </div>
        </div>
    )
}

export default Track
