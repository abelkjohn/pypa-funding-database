import React from "react";
import { remove } from "firebase/database";

export default function IndPassword({id}){



    function close(){
        //close button functionality
        document.getElementById("ind-edit-delete-field").style.display = "none"
    }


    function deleteInd(){
            remove(id)
            document.getElementById("ind-edit-delete-field").style.display = "none"
            //if password correct
    }


    function editInd(){
            document.getElementById("ind-edit-delete-field").style.display = "none"
            if (document.getElementById('edit-form')){
                document.getElementById('edit-form').style.display = window.innerWidth > 500 ? "grid" : 'flex'  
            }
            //if password correct
    }

    return (
        <div id="ind-edit-delete-field" >
            <button  className='edit-delete-password-field-button' id='delete-button' onClick={deleteInd}>Delete</button>
            <button  className='edit-delete-password-field-button' id='edit-button' onClick={editInd}>Edit</button>
        <button className="add-new-church-close" onClick={close}>X</button>
    </div>
    )
}