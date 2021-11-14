import React, { useState } from 'react';

const UpdateQuestion = ()=>{
    const [ searchId, setSearchId ] = useState(null);
    const [ result, setResult ] = useState({});
    const [ updatedQuestion, setUpdatedQuestion ] = useState(null);
    const [ updatedA, setUpdatedA ] = useState(null);
    const [ updatedB, setUpdatedC ] = useState(null);
    const [ updatedC, setUpdatedB ] = useState(null);
    const [ updatedD, setUpdatedD ] = useState(null);
    const [ updatedCorrectChoice, setUpdatedCorrectChoice ] = useState(null);

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

    const searchQuestion =()=>{
        fetch('/api/getQuestion/'+searchId)
        .then(res=>res.json())
        .then(data=>setResult(data[0]))

      
    }

    const update=()=>{

        let values = {
            question: updatedQuestion!==null?updatedQuestion:question,
            answer_a: updatedA!==null?updatedA:answer_a,
            answer_b: updatedB!==null?updatedB:answer_b,
            answer_c: updatedC!==null?updatedC:answer_c,
            answer_d: updatedD!==null?updatedD:answer_d,
            correct_choice: updatedCorrectChoice!==null?updatedCorrectChoice:correct_choice,
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

        fetch("/api/updateQuestion/" + searchId ,requestOptions)
				.then((response)=>response.json()) 
				.then(data=>{
					alert(data.message);
				})
    }
    
    const {question_id, question, answer_a, answer_b, answer_c, answer_d, correct_choice } = result;

    return(
        <div className="frame">
            <div>
                ID: <input type="number" onChange={(e)=>setSearchId(e.target.value)} />
                <button onClick={(e)=>searchId===""?e.preventDefault():searchQuestion()}> SEARCH </button>
                {question_id}
            </div>
            {Object.keys(result).length!==0&&(
               
            <div>
                Question: <input defaultValue={question} onChange={(e)=>setUpdatedQuestion(e.target.value)} /> <br/>
                A: <input defaultValue={answer_a} onChange={(e)=>setUpdatedA(e.target.value)} /> <br/>
                B: <input defaultValue={answer_b} onChange={(e)=>setUpdatedB(e.target.value)} /> <br/>
                C: <input defaultValue={answer_c} onChange={(e)=>setUpdatedC(e.target.value)} /> <br/>
                D: <input defaultValue={answer_d} onChange={(e)=>setUpdatedD(e.target.value)} /> <br/>
                <select onChange={(e)=>setUpdatedCorrectChoice(e.target.value)}>
                    <option selected={correct_choice==='A'?true:false} value='A'> A </option>
                    <option selected={correct_choice==='B'?true:false} value='B'> B </option>
                    <option selected={correct_choice==='C'?true:false} value='C'> C </option>
                    <option selected={correct_choice==='D'?true:false} value='D'> D </option>
                </select>
                <button onClick={()=>update()}> UPDATE </button>
            </div>)}
        </div>
    )
}

export default UpdateQuestion;