import React from "react"

export default function Button(){
    function dissapear(){
        document.getElementById("add-new-church").style.display = document.getElementById("add-new-church").style.display === "flex" ? "none" : "flex"
    }
    return (
        <button onClick={dissapear} id="add-churches-button">+</button>
    )
}
