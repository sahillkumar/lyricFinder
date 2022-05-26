export const reducer = (state,action) =>{
    switch (action.type) {
        case 'SEARCH_SONG':
            return {
                ...state,
                track_list:action.track_list,
                heading:'Search Results'
            }   
        case 'GET_TOP'  :
            return{
            ...state,
            track_list:action.track_list,
            heading:'Top 10 Tracks'
        }
        default:
            return state
    }
}