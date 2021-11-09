import React from 'react';
import TeacherNavbar from '../teacher/TeacherNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddStudent from '../teacher/AddStudent';
import AddQuiz from '../teacher/AddQuiz';
import AddQuestion from '../teacher/AddQuestion'
import AddClass from '../teacher/AddClass';
import UpdateStudent from '../teacher/UpdateStudent';
import UpdateQuiz from '../teacher/UpdateQuiz';
import UpdateQuestion from '../teacher/UpdateQuestion';
import StudentList from '../teacher/StudentList'
import QuizList from "../teacher/QuizList";

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
                    <Route path='/teacher/updateStudent'>
                        <UpdateStudent/>
                    </Route>
                    <Route path='/teacher/updateQuiz'>
                        <UpdateQuiz/>
                    </Route>
                    <Route path='/teacher/updateQuestion'>
                        <UpdateQuestion/>
                    </Route>
                    <Route path='/teacher/studentList'>
                        <StudentList/>
                    </Route>
                    <Route path='/teacher/quizList'>
                        <QuizList/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default TeacherHome;