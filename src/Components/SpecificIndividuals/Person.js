import React from 'react'
import { app, getDatabase, onValue, ref, set} from "../../firebase"

export default function Person(props){

    React.useEffect(function(){
        const db = getDatabase(app)
        const database = ref(db, `/personDetails/${props.id}`)
        onValue(database, (snapshot) => {
            const data = snapshot.val()
            if ( data === null ){
            } else {
                setValue(data)
            }
        })
        }, [ props.id ])

    if (document.getElementById("ind-details")){
        document.getElementById("ind-details").style.display = props.id ? 'flex' : 'none' 
    }

    const db = getDatabase(app)
    const [ value, setValue ] = React.useState('')

    function close(e){
        e.preventDefault()
        document.getElementById('ind-details').style.display = 'none'
        window.location.reload()
    }

    function saveChanges(e){
        e.preventDefault()
        set(ref(db, `personDetails/${props.id}`), 
        `${value}`
        )
        document.getElementById('ind-details').style.display = 'none'
        window.location.reload()
        setValue('')
    }

    return (
        <div id='ind-details'>  
                <h1>{props.name}</h1>
                <button id='close-button-ind-details' type='button' onClick={close}>X</button>
                <textarea onChange={(e) => setValue(e.target.value)} value={value}></textarea>
                <button id='button-ind-details' type='button' onClick={saveChanges}>Save</button>
        </div>
    )
}