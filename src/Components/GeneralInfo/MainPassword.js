import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function MainPassword(props){
    const [ password, setPassword ] = React.useState('')
    const navigate = useNavigate()
    if (password === "helloWorld" || props.auth){
        props.word(true)
        navigate('/')
    }
    return (
        <>
            <Header />
            <div id='main-password'>
                <h1>Please Enter Access Key:</h1>
                <form>
                    <input type='password'
                    onChange={(e) => setPassword(e.target.value)}></input>
                </form>
            </div>
            </>
    )
}