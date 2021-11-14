import React from 'react';
import TeacherNavbar from '../components/teacher/TeacherNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddStudent from '../components/teacher/AddStudent';
import AddQuiz from '../components/teacher/AddQuiz';
import AddQuestion from '../components/teacher/AddQuestion'
import AddClass from '../components/teacher/AddClass';
import UpdateStudent from '../components/teacher/UpdateStudent';
import UpdateQuiz from '../components/teacher/UpdateQuiz';
import UpdateQuestion from '../components/teacher/UpdateQuestion';
import StudentList from '../components/teacher/StudentList'
import QuizList from "../components/teacher/QuizList";
import DeleteQuestion from "../components/teacher/DeleteQuestion";

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
                    <Route path='/teacher/quizList'>
                        <QuizList/>
                    </Route>
                    <Route path='/teacher/deleteQuestion'>
                        <DeleteQuestion/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default TeacherHome;