import axios from 'axios';
import React, {useContext, useState} from 'react';
import { Context } from "../../context";

const Search = () => {

    const [tracktitle, setTracktitle] = useState('')
    const { dispatch } = useContext(Context)

    const handleChange = ({ target : { value }})=>{
        setTracktitle(value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${tracktitle}&page_size=10&page=1&s_track_rating=desc&apikey=46a908cae9e6fe663a1fe8ef339f08f6`)
        .then(res=>{
            dispatch({
                type:'SEARCH_SONG',
                track_list:res.data.message.body.track_list
            })
            setTracktitle('')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="card col-md-10 card-body m-auto mb-4 p-4">
            <h1 className="display-4 text-center"><i className="fas fa-music"></i> Search For a Song</h1>
            <p className="lead text-center">Get the lyrics of any Song</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <input type="text"
                    name="tracktitle"
                    placeholder="Type song name here..."
                    className="form-control form-control-lg mb-4"
                    value={tracktitle}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary btn-block form-control">
                    <i className="fas fa-search"> </i> Search
                  </button>
                </div>
            </form>
        </div>
     );
}

export default Search;
