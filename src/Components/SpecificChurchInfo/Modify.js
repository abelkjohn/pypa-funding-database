import React from "react";
import { getDatabase, ref, onValue, update } from "../../firebase";
import { app } from "../../firebase"

export default function Modify({location, id}){

    const [ name, setName ] = React.useState("")
    const [ country, setCountry ] = React.useState("")
    const [ time, setTime ] = React.useState("")
    const [ donated, setDonated ] = React.useState("")


    React.useEffect(function(){
        const db = getDatabase(app)
        const database = ref(db, `/individuals/${location}/${id}`)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            if ( data === null ){
            } else {
                setName(data.name)
                setCountry(data.country)
                setTime(data.time)
                setDonated(data.donated)
            }
        })
        }, [ id, location ])

        function saveChanges(e){
            e.preventDefault()
            const db = getDatabase(app)
            const database = ref(db, `/individuals/${location}/${id}`)
            update(database, {
                name: name,
                country: country,
                time: time,
                donated: donated
            })
            document.getElementById("edit-name").value = ""
            document.getElementById("edit-time").value = ""
            document.getElementById("edit-contry").value = ""
            document.getElementById("edit-donated").value = ""
            document.getElementById("edit-form").style.display = "none" 
            window.location.reload()
        }
        if (document.getElementById("edit-form")){
            window.addEventListener("orientationchange", () => document.getElementById("edit-form").style.display = "none")
        }
        
        function close(e){
            e.preventDefault()
            document.getElementById("edit-form").style.display = "none"
            document.getElementById("edit-name").value = ""
            document.getElementById("edit-time").value = ""
            document.getElementById("edit-contry").value = ""
            document.getElementById("edit-donated").value = ""
        }
        return (
            <form id="edit-form">
                <div className="add-header">
                    <h1>Add Invividual Details Here:</h1>
                </div>
                <div className="ind-input input1">
                    <label>Name:</label>
                    <input className="input-proper" id='edit-name' onChange={e => setName(e.target.value)}  placeholder={name}></input>
                </div>
                <div className="ind-input input2">
                    <label>Country:</label>
                    <input className="input-proper" id='edit-contry' onChange={e => setCountry(e.target.value)}  placeholder={country}></input>
                </div>
                <div  className="ind-input input3">
                    <label>Best time to contact:</label>
                    <input className="input-proper" id='edit-time' onChange={e => setTime(e.target.value)}  placeholder={time}></input>
                </div>
                <div className="ind-input input4">
                    <label>Rupees Donated:</label>
                    <input className="input-proper" id='edit-donated'  onChange={e => setDonated(e.target.value)}  placeholder={donated}></input>
                </div>
                <div className="button">
                    <button className="proper-add-button" onClick={saveChanges} >Submit</button>
                </div>
                <button type="button" className="add-new-church-close" onClick={close}>X</button>

            </form>
        )
}