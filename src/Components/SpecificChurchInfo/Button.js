import React from "react";

export default function Button(){
    function open(){
        document.getElementById("specific-password-field").style.display = "flex"
    }
    return <button onClick={open} id="specific-info-button">+</button>
}