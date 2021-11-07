import React, { useState } from 'react';

const SearchStudent = ()=>{
    const [ searchId, setSearchId ] = useState(1);
    const [ result, setResult ] = useState("");

    useState(()=>{
        if(searchId!==''){
            fetch('/api/getStudent/'+searchId)
            .then(res=>res.json())
            .then(data=>setResult(data))
        }
    },[searchId,result])

    const {student_class} = result;

    return(
        <>
            <div style={{position:"relative",left:"100px", top:"100px"}}>
                {student_class}
            </div>
        </>
    )
}

export default SearchStudent;