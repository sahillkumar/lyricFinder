import React from 'react';
import {Consumer} from '../../context'
import Spinner from '../layouts/Spinner';
import Track from './Track';

class Tracks extends React.Component {
    
    render() { 
        return(
            <Consumer>
            {
                value =>{
                    const { track_list , heading,setReload, reload } = value
                    if(track_list.length > 0){
                        return(
                            <React.Fragment>
                                <h3 className="text-center mb-3">{heading}</h3>
                                {heading === 'Top 10 Tracks' ? '' : 
                                (
                                    <div className="d-grid col-md-2 mx-auto mb-4 px-2">
                                        <div className="btn btn-dark" onClick={()=>setReload(!reload)}>Get Top 10 Tracks</div>
                                    </div>
                                    
                                )
                                 }
                                <div className="row d-flex justify-content-center">
                                    {
                                        track_list.map(track=>(
                                            <Track key={track.track.track_id} track={track}/>
                                        ))
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }else{
                        return(
                            <Spinner/>
                        )
                    }
                }
            }
            </Consumer>
        )
 
    }
}
 
export default Tracks;