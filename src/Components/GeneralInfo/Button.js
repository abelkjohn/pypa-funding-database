import React from "react"

export default function Button(){
    function dissapear(){
        const layout = window.innerWidth <= 480 ? "flex" : "grid" 
            document.getElementById("add-new-church").style.display = layout 
    }
    return (
        <button id="add-churches-button" onClick={dissapear} className="add-churches-button">+</button>
    )
}
