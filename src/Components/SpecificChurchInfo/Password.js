import React from "react";


export default function Password(){
    const [ password, setPassword ] = React.useState("")
    function close(){
        //close button functionality
        document.getElementById("specific-password-field").style.display = "none"
        document.getElementById("specific-password-input").value = ""
        document.getElementById("specific-warning").innerText = ""
        setPassword("")
    }
    function appear(){
        document.getElementById("specific-password-input").value = ""
        if ( password === "helloWorld"){
            const layout = window.innerWidth <= 480 ? "flex" : "grid" 
            //if password correct
            document.getElementById("ind-form").style.display = layout
            document.getElementById("specific-password-field").style.display = "none"
            document.getElementById("specific-password-input").value = ""
            document.getElementById("specific-warning").innerText = ""
            setPassword("")
        } else {
            document.getElementById("specific-warning").innerText = "Invalid Password, please try again"
            setPassword("")
        }
    }
    return(
        <div id="specific-password-field" className="password-field">
            <h1>Enter Passcode:</h1>
            <p id="specific-warning"></p>
            <input id="specific-password-input" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button  className='password-field-button' onClick={appear}></button>
            <button className="add-new-church-close" onClick={close}>X</button>
        </div>
    )
}