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
    
    function addNewPerson(e){

        if (null) {

        } else {
            if (name && country && time && donated){
                const id = name + " " + uuidv4()
                set(ref(db, `/individuals/${props.location}/${id}` ), {
                    name: name,
                    country: country,
                    time: time,
                    donated: donated,
                    id: id
                })
                e.preventDefault()
                document.getElementById('ind-input1').value = ""
                document.getElementById('ind-input2').value = ""
                document.getElementById('ind-input3').value = ""
                document.getElementById('ind-input4').value = ""
                document.getElementById('ind-form').style.display = "none"
                window.location.reload()
            }

        }
        
        
    }

    function removeIndCard(){
        document.getElementById('ind-form').style.display = "none"
        document.getElementById("ind-input1").value = ""
        document.getElementById("ind-input2").value = ""
        document.getElementById("ind-input3").value = ""
        document.getElementById("ind-input4").value = ""
        window.location.reload()

    }

    window.addEventListener('orientationchange', function(){
        if (document.getElementById("ind-form")){
            document.getElementById("ind-form").style.display = 'none'
        }
    })

    return (
        <form id="ind-form" >
            <div className="add-header">
                <h1>Add Invividual Details Here:</h1>
            </div>
            <div className="ind-input input1">
                <label>Name:</label>
                <input className="input-proper" id="ind-input1" onChange={e => setName(e.target.value)} required></input>
            </div>
            <div className="ind-input input2">
                <label>Country:</label>
                <input className="input-proper" id="ind-input2" onChange={e => SetCountry(e.target.value)} required></input>
            </div>
            <div  className="ind-input input3">
                <label>Best time to contact:</label>
                <input className="input-proper" id="ind-input3"  onChange={e => setTime(e.target.value)} required></input>
            </div>
            <div className="ind-input input4">
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