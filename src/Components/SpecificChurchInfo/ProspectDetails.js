import React from "react"
import { app } from "../../firebase"
import { getDatabase, ref, onValue} from "../../firebase"
import IndPassword from "./IndPassword"
import Modify from "./Modify"
import Person from "../SpecificIndividuals/Person"
import { useNavigate } from "react-router-dom";


export default function ProspectDetails(props){
    const [ indArray, setIndArray ] = React.useState([]) 
    const [ editReference, setEditReference ] = React.useState('')
    const [ link, setLink ] = React.useState('')
    const [ person, setPerson ] = React.useState('')
    const [ personName, setPersonName ] = React.useState('')

    const db = getDatabase(app)
    const navigate = useNavigate() 

    React.useEffect(() => {
        if (props.auth !== true){
            navigate('/')
        }
    }, [props.auth, navigate])

    React.useEffect(function(){
        const location = props.location
        const displayValue = props.name
        const db = getDatabase(app)
        const database = ref(db, `/individuals/${location}`)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            if (data === null ){
                document.getElementById("ind-dashboard").innerHTML = `<h1>Please add ${displayValue} church members to continue...</h1>`
            } else {
                setIndArray(Object.values(data))
            }
        })
        }, [ props ])




    return <>
            <div className="ind-dashboard" id="ind-dashboard">
            <Person id={person} name={personName}/>
                {indArray.length !== 0 ? indArray.map(i => {
                    function getId(e){
                        const reference = e.target.dataset.id
                        setLink(ref(db, `/individuals/${props.location}/${reference}`))
                        setEditReference(reference)
                        document.getElementById("ind-edit-delete-field").style.display = "flex"
                    }
                    function details(e){
                        e.preventDefault()
                        setPerson(e.target.dataset.id)
                        setPersonName(e.target.dataset.name)
                    }
                    return (<div id="ind-card">
                            <div onDoubleClick={(e) => getId(e)} data-id={i.id} key={i.id}>
                                <h1 data-id={i.id}>{i.name}</h1>
                                <p data-id={i.id}>Current Location:</p>
                                <h3 data-id={i.id}>{i.country}</h3>
                                <p data-id={i.id}>Best Time To Contact:</p>
                                <h3 data-id={i.id}>{i.time}</h3>
                                <p data-id={i.id}>Donations:</p>
                                <h3 data-id={i.id}>{i.donated}</h3>
                            </div>
                                <button id='ind-card-add-details' data-id={i.id} data-name={i.name} onClick={details}>More Details</button>
                    </div>
                    )
                }) : <h1>Loading....</h1>}
                    <IndPassword id={link} />
                    <div id='ind-modify-form'><Modify location={props.location} id={editReference}/></div>
                    </div>
        </>
}