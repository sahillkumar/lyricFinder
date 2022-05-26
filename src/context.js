import axios from 'axios'
import React, {  useReducer,useEffect, useState } from 'react'
import { reducer } from "./reducer";

export const Context = React.createContext()

export function ContextProvider(props) {

    const [state, dispatch] = useReducer(reducer,{
        track_list:[],
        heading:'Top 10 Tracks'
    })

    const [reload, setReload] = useState(false)

    useEffect(() => {
        axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=46a908cae9e6fe663a1fe8ef339f08f6`)
        .then(res=>{
            dispatch({
                type:'GET_TOP',
                track_list:res.data.message.body.track_list
            })

        })
        .catch(err=>{
            console.log(err);
        })
    }, [reload])

    return (
        <Context.Provider value={{...state,dispatch,reload,setReload}}>
            {props.children}
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer
