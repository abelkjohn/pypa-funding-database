import React from "react"

export default function Header(props){
    return (
        <div className="header" id='ind-dashboard-header'>
            <h1>{props.name}</h1>
        </div>
    )
}