import React from "react";
import { remove } from "firebase/database";

export default function IndPassword({id}){
    const [ password, setPassword ] = React.useState("")
    function close(){
        //close button functionality
        document.getElementById("ind-password-field").style.display = "none"
        document.getElementById("ind-password-input").value = ""
        document.getElementById("specific-warning").innerText = ""
        setPassword('')
    }
    function appear(){
        document.getElementById("ind-password-input").value = ""
        if ( password === "helloWorld"){
            remove(id)
            document.getElementById("ind-password-field").style.display = "none"

            setPassword("")
            //if password correct
        } else {
            document.getElementById("ind-warning").innerText = "Invalid Password, please try again"
            setPassword("")
        }
    }
    return (
        <div id="ind-password-field" className="password-field">
        <h1>Enter Passcode:</h1>
        <p id="ind-warning"></p>
        <input id="ind-password-input" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button  className='password-field-button' onClick={appear}></button>
        <button className="add-new-church-close" onClick={close}>X</button>
    </div>
    )
}