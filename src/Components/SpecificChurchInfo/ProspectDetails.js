import React from "react"
import { app } from "../../firebase"
import { getDatabase, ref, onValue} from "../../firebase"
import IndPassword from "./IndPassword"
import Modify from "./Modify"



export default function ProspectDetails(props){
    const [ indArray, setIndArray ] = React.useState([]) 
    const [ editReference, setEditReference ] = React.useState('')
    const [ link, setLink ] = React.useState('')

    const db = getDatabase(app)
    
    React.useEffect(function(){
        const location = props.location
        const db = getDatabase(app)
        const database = ref(db, `/individuals/${location}`)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            if (data === null ){
                document.getElementById("ind-dashboard").innerHTML = `<h1>Please add ${location} church members to continue...</h1>`
            } else {
                setIndArray(Object.values(data))
            } 
        })
        }, [ props ])



    return <div className="ind-dashboard" id="ind-dashboard">
        {indArray.length !== 0 ? indArray.map(i => {
                    function getId(e){
                        const reference = e.target.dataset.id
                        setLink(ref(db, `/individuals/${props.location}/${reference}`))
                        setEditReference(reference)
                        document.getElementById("ind-password-field").style.display = "flex"
                    }
        return (
            <div onDoubleClick={(e) => getId(e)} data-id={i.id} id="ind-card" key={i.id}>
                <h1 data-id={i.id}>{i.name}</h1>
                <p data-id={i.id}>Current Location:</p>
                <h3 data-id={i.id}>{i.country}</h3>
                <p data-id={i.id}>Best Time To Contact:</p>
                <h3 data-id={i.id}>{i.time}</h3>
                <p data-id={i.id}>Donations:</p>
                <h3 data-id={i.id}>{i.donated}</h3>
            </div>
            )
            }) : <h1>Loading....</h1>}
            <div id='ind-password-area'><IndPassword id={link} /></div>
            <div id='ind-modify-form'><Modify location={props.location} id={editReference}/></div>
            </div>
}