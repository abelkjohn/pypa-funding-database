import React from "react";

export default function Button(){
    function open(){
        const layout = window.innerWidth <= 500 ? "flex" : "grid"
        document.getElementById("ind-form").style.display = layout
    }
    return <button onClick={open} id="specific-info-button">+</button>
}