import React from "react";
import { app } from "../firebase"
import { getDatabase, onValue, ref, set} from "../firebase"





export default function Churches(){
    const [ name, setName ] = React.useState("")
    const [ location, setLocation ] = React.useState("")
    const [ prName, setPrName ] = React.useState("")
    const [ secName, setSecName ] = React.useState("")
    const [ curDatabase, setCurDatabase ] = React.useState({})
    const [ churchArray, setChurchArray ] = React.useState([])
    
    const db = getDatabase(app)
    
    React.useEffect(function(){
        const db = getDatabase(app)
        const database = ref(db)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            setCurDatabase(data)
            setChurchArray(Object.values(curDatabase))
        })
        })
    
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
    <div class="hello">
        {churchArray.map(i => {
            return (
                    
                    <div id='church-card' className="church-card">
                        <h1>{i.name}</h1>
                        <h2>{i.location}</h2>
                        <h3>{i.prName}</h3>
                        <h3>{i.secName}</h3>
                    </div>
            )
            
        })}
        {/** Creating new Churches */}
        <form id="add-new-church">
        <label>Church Name:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" required>
            </input> 
            <label>Church Location:</label>
            <input onChange={(e) => setLocation(e.target.value)} type="text" required>
            </input>
            <label>Church Pastor:</label>
            <input onChange={(e) => setPrName(e.target.value)} type="text" required>
            </input>        
            <label>Church P.Y.P.A. Secretary:</label>
            <input onChange={(e) => setSecName(e.target.value)} type="text" required>
            </input>
            <button onClick={addNewChurch}>Add Churches</button>
        </form>
    </div>
 )   
}