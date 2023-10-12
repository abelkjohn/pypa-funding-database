import React from "react";
import { app } from "../../firebase"
import { getDatabase, onValue, ref, set} from "../../firebase"
import Button from './Button'
import Password from './Password'
import { Link } from 'react-router-dom'
import EditForm from './EditForm'
import Header from "./Header"
import { useNavigate } from "react-router-dom";



export default function Churches(props){



    const [ name, setName ] = React.useState("")
    const [ location, setLocation ] = React.useState("")
    const [ prName, setPrName ] = React.useState("")
    const [ secName, setSecName ] = React.useState("")
    const [ churchArray, setChurchArray ] = React.useState([])
    const [ selectedLocation, setSelectedLocation ] = React.useState('')
    const navigate = useNavigate() 

    React.useEffect(() => {
        if (props.auth !== true){
            navigate('/login')
        }
    }, [props.auth, navigate])
    
    const db = getDatabase(app)
    
    React.useEffect(function(){
        const db = getDatabase(app)
        const database = ref(db, "/churches")
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            if ( data === null ){
            } else {
                setChurchArray(Object.values(data))
            }
        })
        }, [])

    function removeAddChurchCard(){
        document.getElementById("add-new-church").style.display = "none"
        document.getElementById("church-input1").value = ""
        document.getElementById("church-input2").value = ""
        document.getElementById("church-input3").value = ""
        document.getElementById("church-input4").value = ""
    }
    
    function addNewChurch(){
        if (null) {

        } else {
            if (name && prName && secName && location){
                set(ref(db, `/churches/${location}` ), {
                    name: name,
                    prName: prName,
                    secName: secName,
                    location: location,
                })
            }
        }
        
    }
    
    if (document.getElementById("add-new-church")){
        window.addEventListener("orientationchange", () => document.getElementById("add-new-church").style.display = "none")
    }

    if (props.auth){
        return (
            <div className="hello">
            <Header />
            <Button />
            <Password />
            {selectedLocation}
            {churchArray.map(i => {
                function edit(e){
                    e.preventDefault()
                    setSelectedLocation(<EditForm url={i.location}/>)
                }
                return (
                    <div className="church-card" key={i.location}>
                            <Link
                            className="church-card-without-button"
                            to={`/${i.location}`}
                            style={{ textDecoration: 'none' }}                     
                            unselectable="on" 
                            data-location={i.location} 
                            id={i.location}>
                                <h1 data-location={i.location}>{i.name}</h1>
                                <h2 data-location={i.location}>{i.location}</h2>
                                <h3 data-location={i.location}>{i.prName}</h3>
                                <h3 data-location={i.location}>{i.secName}</h3>
                            </Link>
                            <button className="church-edit-button" onClick={edit}>Edit Church Details</button>
                        </div>
                )
                
            })}
        {/** Creating new Churches */}
        <form id="add-new-church" className="display add-new-values">
            <div className="add-header">
                <h1>Enter Church Details:</h1>
            </div>
            <div className="input1 flex">
                <label>Church Name:</label>
                <input id="church-input1" className="input-proper" onChange={(e) => setName(e.target.value)} type="text" required>
                </input> 
            </div>
            <div className="input2  flex">
                <label>Church Location:</label>
                <input id="church-input2" className="input-proper" onChange={(e) => setLocation(e.target.value)} type="text" required>
                </input>
            </div>
            <div className="input3 flex">
                <label>Church Pastor:</label>
                <input id="church-input3" className="input-proper" onChange={(e) => setPrName(e.target.value)} type="text" required>
                </input>        
            </div>
            <div className="input4 flex">
                <label>Church P.Y.P.A. Secretary:</label>
                <input id="church-input4" className="input-proper" onChange={(e) => setSecName(e.target.value)} type="text" required>
                </input>
            </div>
            <div className="button">
                <button className="proper-add-button" onClick={addNewChurch}>Add Churches</button>
            </div>
            <button className="add-new-church-close" onClick={removeAddChurchCard}>X</button>
        </form>
    </div>
        )
    }   
}