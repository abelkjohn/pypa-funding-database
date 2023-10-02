import React from "react"

export default function Header(props){
    return (
        <div id="prospect-info-component">
            <h1 id="info-header">{props.location}</h1>
        </div>
    )
}