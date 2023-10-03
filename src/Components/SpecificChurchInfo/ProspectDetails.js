import React from "react"
import { app } from "../../firebase"
import { getDatabase, ref, onValue} from "../../firebase"

export default function ProspectDetails(props){
    
    const [ indArray, setIndArray ] = React.useState([]) 
    const location = props.location
    

    React.useEffect(function(){
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
        }, [ location ])

    return <div className="ind-dashboard" id="ind-dashboard">
        {indArray.length !== 0 ? indArray.map(i => {
        return (
            <div id="ind-card" >
                <h1>{i.name}</h1>
                <p>Current Location:</p>
                <h3>{i.country}</h3>
                <p>Best Time To Contact:</p>
                <h3>{i.time}</h3>
                <p>Donations:</p>
                <h3>{i.donated}</h3>
            </div>
            )
            }) : <h1>Loading....</h1>}
            </div>
}