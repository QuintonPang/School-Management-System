import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { render } from 'react-dom';
import TeacherHome from './pages/TeacherHome.js';

const TeacherApp = () =>{

    return(
        <Router>
            <Switch>
                <Route exact path=''>
                    <TeacherHome/>
                </Route>
            </Switch>
        </Router>
    )
}

export default TeacherApp;

//find div with id "app"
const teacherAppDiv = document.getElementById('teacherApp');

//render in the div
render(<TeacherApp/>,teacherAppDiv);