import React, { useState } from 'react';

const UpdateStudent = ()=>{
    const [ searchId, setSearchId ] = useState(null);
    const [ result, setResult ] = useState({});
    const [ classes, setClasses ] = useState(null);
    const [ updatedClass, setUpdatedClass ] = useState(null);
    
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

    const searchStudent =()=>{
        fetch('/api/getStudent/'+searchId)
        .then(res=>res.json())
        .then(data=>setResult(data[0]))

      
    }

    const searchClass =()=>{
        fetch('/api/getAllStudentClasses')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    }

    const update=()=>{

        let values = {
            student_class: updatedClass,
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

        fetch("/api/updateStudent/" + searchId ,requestOptions)
				.then((response)=>response.json()) 
				.then(data=>{
					alert(data.message);
				})
    }
    
    const {student_id, username, student_class:cls, user } = result;

    return(
        <div className="frame">
            <div>
                ID: <input type="number" onChange={(e)=>setSearchId(e.target.value)} />
                <button onClick={()=>{searchStudent(); searchClass();}}> SEARCH </button>
                {username}
            </div>
            {classes&&(
               
            <div>
                <select onChange={(e)=>setUpdatedClass(e.target.value)}>
                    {classes.map((c)=>{
                        return(
                            c.class_id===cls?(
                               

                                <option selected key={c.class_name} value={c.class_id}>
                                    {c.class_name}
                                </option>
                                
                            ):(
                              
                                <option key={c.class_name} value={c.class_id}>
                                {c.class_name}
                            </option>
                                
                            )
                        
                        )
                    })}
                </select>
                <button onClick={()=>update()}> UPDATE </button>
            </div>)}
        </div>
    )
}

export default UpdateStudent;