import React from 'react';
import TeacherNavbar from '../teacher/TeacherNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddStudent from '../teacher/AddStudent';
import AddQuiz from '../teacher/AddQuiz';
import AddQuestion from '../teacher/AddQuestion'
import AddClass from '../teacher/AddClass';
import SearchStudent from '../teacher/SearchStudent';

const TeacherHome = () =>{

    return(
        <>
            <Router>
                <TeacherNavbar/>
                <Switch>
                    <Route path='/teacher/registerStudent'>
                        <AddStudent/>
                    </Route>
                    <Route path='/teacher/registerQuiz'>
                        <AddQuiz/>
                    </Route>
                    <Route path='/teacher/registerQuestion'>
                        <AddQuestion/>
                    </Route>
                    <Route path='/teacher/registerClass'>
                        <AddClass/>
                    </Route>
                    <Route path='/teacher/searchStudent'>
                        <SearchStudent/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default TeacherHome;