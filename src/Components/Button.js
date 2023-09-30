import React from "react"

export default function Button(){
    function dissapear(){

        const layout = window.innerWidth <= 480 ? "flex" : "grid" 
        document.getElementById("add-new-church").style.display = document.getElementById("add-new-church").style.display === layout ? "none" : layout
    }
    return (
        <button onClick={dissapear} id="add-churches-button">+</button>
    )
}
