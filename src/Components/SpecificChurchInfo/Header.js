import React from "react"

export default function Header(props){
    return (
        <div className="header">
            <h1>{props.name}</h1>
        </div>
    )
}