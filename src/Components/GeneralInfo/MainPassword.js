import React from "react";

export default function MainPassword(props){
    const [ password, setPassword ] = React.useState('')
    
    if (password === "helloWorld" || props.auth === true){
        document.getElementById("main-password").style.display = 'none'
        props.word(true)
    }
    return (
        <div id='main-password'>
            <h1>Please Enter Access Key:</h1>
            <form>
                <input type='password'
                onChange={(e) => setPassword(e.target.value)}></input>
            </form>
        </div>
    )
}