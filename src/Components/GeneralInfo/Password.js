import React from "react";

export default function Password(){
    const [ password, setPassword ] = React.useState("")
    function close(){
        document.getElementById("password-field").style.display = "none"
        document.getElementById("warning").innerText = ""
        setPassword("")

    }
    function appear(){
        document.getElementById("password-input").value = ""
        if ( password === "helloWorld"){
            const layout = window.innerWidth <= 480 ? "flex" : "grid" 
            document.getElementById("add-new-church").style.display = layout 
            document.getElementById("password-field").style.display = "none"
            document.getElementById("warning").innerText = ""
            setPassword("")
        } else {
            document.getElementById("warning").innerText = "Invalid Password, please try again"
            setPassword("")
        }
    }
    return(
        <div className="password-field" id="password-field">
            <h1>Enter Passcode:</h1>
            <p id="warning"></p>
            <input id="password-input" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button className='password-field-button' onClick={appear}></button>
            <button className="add-new-church-close" onClick={close}>X</button>
        </div>
    )
}