import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { app } from "../../firebase"
import { getDatabase, ref, set} from "../../firebase"


export default function IndividualForms(props){

    const [ name, setName ] = React.useState("")
    const [ country, SetCountry] = React.useState("")
    const [ time, setTime ] = React.useState("")
    const [ donated, setDonated ] = React.useState("")

    const db = getDatabase(app)

    function addNewPerson(){
        if (null) {

        } else {
            if (name && country && time && donated){
                set(ref(db, `/individuals/${props.location}/${name + " " + uuidv4()}` ), {
                    name: name,
                    country: country,
                    time: time,
                    donated: donated
                })
            }
        }
        
    }

    function removeIndCard(){
        document.getElementById('ind-form').style.display = "none"
        document.getElementById("ind-input1").value = ""
        document.getElementById("ind-input2").value = ""
        document.getElementById("ind-input3").value = ""
        document.getElementById("ind-input4").value = ""
    }
    return (
        <form id="ind-form" className="add-new-values">
            <div className="add-header">
                <h1>Add Invividual Details Here:</h1>
            </div>
            <div className="input1">
                <label>Name:</label>
                <input className="input-proper" id="ind-input1" onChange={e => setName(e.target.value)} required></input>
            </div>
            <div className="input2">
                <label>Country:</label>
                <input className="input-proper" id="ind-input2" onChange={e => SetCountry(e.target.value)} required></input>
            </div>
            <div  className="input3">
                <label>Best time to contact:</label>
                <input className="input-proper" id="ind-input3"  onChange={e => setTime(e.target.value)} required></input>
            </div>
            <div className="input4">
                <label>Rupees Donated:</label>
                <input className="input-proper" id="ind-input4"  onChange={e => setDonated(e.target.value)} required></input>
            </div>
            <div className="button">
                <button className="proper-add-button" onClick={addNewPerson}>Submit</button>
            </div>
            <button className="add-new-church-close" onClick={removeIndCard}>X</button>

        </form>
    )
}