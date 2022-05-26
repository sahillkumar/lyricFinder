import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
    return (
        <div className="spinner">
            <img src={spinner} alt="loading..." style={{ display:"block" , margin:"60px auto"}}/>
        </div>
    )
}

export default Spinner
