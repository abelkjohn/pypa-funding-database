import React from "react";
import { getDatabase, ref, onValue, update } from "../../firebase";
import { app } from "../../firebase"


export default function EditForm(props){

    if (document.getElementById("church-edit-form")){
        const layout = window.innerWidth >= 480 ? "grid" : "flex"
        document.getElementById("church-edit-form").style.display = layout
    }


    const [ name, setName ] = React.useState()
    const [ location, setLocation ] = React.useState()
    const [ pastor, setPastor ] = React.useState()
    const [ secretary, setSecretary ] = React.useState()


    React.useEffect(function(){
        const db = getDatabase(app)
        const database = ref(db, `/churches/${props.url}`)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            if ( data === null ){
            } else {
                setName(data.name)
                setLocation(data.location)
                setPastor(data.prName)
                setSecretary(data.secName)
            }
        })
        }, [ props.url ])
        
        function closeChurchEdit(e){
            e.preventDefault()
            document.getElementById('church-edit-form').style.display = 'none'

        }

        function updateCurches(e){
            e.preventDefault()
            const db = getDatabase(app)
            const database = ref(db, `/churches/${props.url}/`)
            update(database, {
                name: name,
                location: location,
                prName: pastor,
                secName: secretary
            })
            document.getElementById('church-edit-form').style.display = 'none'
            window.location.reload()
        }
    
    return (
        <form id="church-edit-form" className="add-new-values">
            <div className="add-header" id="edit-header">
                <h1>Enter Church Details:</h1>
            </div>
            <div className="input1 flex">
                <label>Church Name:</label>
                <input id="edit-church-input1" className="input-proper" onChange={(e) => setName(e.target.value)} type="text" placeholder={name}>
                </input> 
            </div>
            <div className="input2  flex">
                <label>Church Location:</label>
                <input id="edit-church-input2" className="input-proper" onChange={(e) => setLocation(e.target.value)} type="text" placeholder={location} readOnly={true}>
                </input>
            </div>
            <div className="input3 flex">
                <label>Church Pastor:</label>
                <input id="edit-church-input3" className="input-proper" onChange={(e) => setPastor(e.target.value)} type="text" placeholder={pastor}>
                </input>        
            </div>
            <div className="input4 flex">
                <label>Church P.Y.P.A. Secretary:</label>
                <input id="edit-church-input4" className="input-proper" onChange={(e) => setSecretary(e.target.value)} type="text" placeholder={secretary}>
                </input>
            </div>
            <div className="button">
                <button className="proper-add-button" onClick={updateCurches}>Update Church</button>
            </div>
            <button type='button' className="add-new-church-close" onClick={closeChurchEdit}>X</button>
        </form>
    )
}