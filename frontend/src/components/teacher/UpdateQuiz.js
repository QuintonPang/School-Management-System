import React, { useState } from 'react';

const UpdateQuiz = ()=>{
    const [ searchId, setSearchId ] = useState(null);
    const [ result, setResult ] = useState({});
    const [ updatedName, setUpdatedName ] = useState(null);
    
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

    const searchQuiz =()=>{
        fetch('/api/getQuiz/'+searchId)
        .then(res=>res.json())
        .then(data=>setResult(data[0]))

      
    }

    const update=()=>{

        let values = {
            quiz_name:updatedName,
        }

        const requestOptions = { 
            method: "PUT", 
            credentials: "same-origin",
            headers: { 
                "X-CSRFToken": getCookie("csrftoken"),
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            //json.stringify second parameter is replace, third parameter is spacing beteween keys

            body:JSON.stringify(values),
        };

        fetch("/api/updateQuiz/" + searchId ,requestOptions)
				.then((response)=>response.json()) 
				.then(data=>{
					alert(data.message);
				})
    }
    
    const {quiz_id, quiz_name } = result;

    return(
        <div className="frame">
            <div>
                ID: <input type="number" onChange={(e)=>setSearchId(e.target.value)} />
                <button onClick={()=>{searchQuiz()}}> SEARCH </button>
                {quiz_id}
            </div>
            {Object.keys(result).length!==0&&(
               
            <div>
                Name: <input defaultValue={quiz_name} onChange={(e)=>setUpdatedName(e.target.value)} />
                <button onClick={()=>update()}> UPDATE </button>
            </div>)}
        </div>
    )
}

export default UpdateQuiz;