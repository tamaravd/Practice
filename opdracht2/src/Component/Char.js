import React from 'react'

function Char(props) {
return(
    <div style={style} onClick={props.clicked}>{props.character}</div>
)
}

const style = {
    display: "inline block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"

}
export default Char