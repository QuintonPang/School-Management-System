import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { render } from 'react-dom';
import StudentHome from './pages/StudentHome.js';

const StudentApp = () =>{

    return(
        <Router>
            <Switch>
                <Route exact path=''>
                    <StudentHome/>
                </Route>
            </Switch>
        </Router>
    )
}

export default StudentApp;

//find div with id "app"
const studentAppDiv = document.getElementById('studentApp');

//render in the div
if(studentAppDiv) render(<StudentApp/>,studentAppDiv);