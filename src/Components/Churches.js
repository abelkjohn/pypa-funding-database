import React from "react";
import { app } from "../firebase"
import { getDatabase, onValue, ref, set} from "../firebase"
import Button from './Button'
import Password from './Password'
import { Link } from 'react-router-dom'



export default function Churches(){
    const [ name, setName ] = React.useState("")
    const [ location, setLocation ] = React.useState("")
    const [ prName, setPrName ] = React.useState("")
    const [ secName, setSecName ] = React.useState("")
    const [ churchArray, setChurchArray ] = React.useState([])
    
    const db = getDatabase(app)
    
    React.useEffect(function(){
        const db = getDatabase(app)
        const database = ref(db)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            setChurchArray(Object.values(data))
        })
        }, [])

    function removeAddChurchCard(){
        document.getElementById("add-new-church").style.display = "none"
        document.querySelector("input").value = ""
    }
    
    function addNewChurch(){
        if (null) {

        } else {
            if (name && prName && secName && location){
                set(ref(db, `/${location}` ), {
                    name: name,
                    prName: prName,
                    secName: secName,
                    location: location
                })
            }
        }
        
    }

 return (    
    <div className="hello">
        <Button />
        <Password />
        {churchArray.map(i => {
            return (
                    <Link to={`/${i.location}`}
                    style={{ textDecoration: 'none' }}                     
                    unselectable="on" 
                    data-location={i.location} 
                    key={i.location} 
                    id='church-card' 
                    className="church-card">
                        <h1 data-location={i.location}>{i.name}</h1>
                        <h2 data-location={i.location}>{i.location}</h2>
                        <h3 data-location={i.location}>{i.prName}</h3>
                        <h3 data-location={i.location}>{i.secName}</h3>
                    </Link>
            )
            
        })}
        {/** Creating new Churches */}
        <form id="add-new-church" className="display">
            <div id="add-header">
                <h1>Enter Church Details:</h1>
            </div>
            <div className="flex" id="input1">
                <label>Church Name:</label>
                <input className="input-proper" onChange={(e) => setName(e.target.value)} type="text" required>
                </input> 
            </div>
            <div className="flex" id="input2">
                <label>Church Location:</label>
                <input className="input-proper" onChange={(e) => setLocation(e.target.value)} type="text" required>
                </input>
            </div>
            <div className="flex" id="input3">
                <label>Church Pastor:</label>
                <input className="input-proper" onChange={(e) => setPrName(e.target.value)} type="text" required>
                </input>        
            </div>
            <div className="flex" id="input4">
                <label>Church P.Y.P.A. Secretary:</label>
                <input className="input-proper" onChange={(e) => setSecName(e.target.value)} type="text" required>
                </input>
            </div>
            <div id="button">
                <button id="proper-add-button" onClick={addNewChurch}>Add Churches</button>
            </div>
            <button id="add-new-church-close" onClick={removeAddChurchCard}>X</button>
        </form>
    </div>
 )   
}