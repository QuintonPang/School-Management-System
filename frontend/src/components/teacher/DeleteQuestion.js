import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";

const DeleteQuestion = () =>{

    const [ quizId, setQuizId ] = useState(null);

      // using jQuery
      function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const handleDeleteQuestion = () =>{
        
        const requestOptions = { 
            method: "DELETE", 
            credentials: "same-origin",
            headers: { 
                "X-CSRFToken": getCookie("csrftoken"),
            },

            //json.stringify second parameter is replace, third parameter is spacing beteween keys

            body:{
                "":""
            },
        };

        fetch('/api/deleteQuestion/'+ quizId, requestOptions)
        .then(res=>res.json())
        .then(data=>alert(data.message));
    }
    
    return(
        <div className="frame">
           Question ID: <input onChange={(e)=>setQuizId(e.target.value)}/> <br/>
           <Button variant="outlined" color="error" onClick={()=>handleDeleteQuestion()}>DELETE</Button>
        </div>
    )
}

export default DeleteQuestion;