import React from 'react'

function Validation (props) {

    let displayLength = null
    
    if(props.length < 5){
        displayLength = (<p>The text is too short</p> )
    } else {
        displayLength = (<p>The text is long enough</p> )
    }

    return (
    <p>The length of this word is: {props.length}, {displayLength}</p>)
}

export default Validation