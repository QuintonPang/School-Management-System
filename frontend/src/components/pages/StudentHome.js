import React from 'react';

const StudentHome = () =>{

    return(
        <>
            WELCOME!

            <button >
                <a href='/account/login'>LOGIN STUDENT</a>
            </button>

            <button onClick={()=>history.push('/account/login')}>
                LOGIN TEACHER
            </button>
        </>
    )
}

export default StudentHome;