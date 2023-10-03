import React from "react"

export default function Button(){
    function dissapear(){
        document.getElementById("password-field").style.display = "flex"

    }
    return (
        <button onClick={dissapear} className="add-churches-button">+</button>
    )
}
