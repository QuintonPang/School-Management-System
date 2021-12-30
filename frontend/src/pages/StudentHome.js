import React from 'react';
import StudentNavbar from '../components/student/StudentNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AnswerQuiz from '../components/student/AnswerQuiz';
import AnswerSheet from '../components/student/AnswerSheet';
import ResultList from '../components/student/ResultList';

const StudentHome = () =>{

    return(
        <>
              <Router>
                <StudentNavbar/>
                <Switch>
                    <Route exact path='/student/answerQuiz'>
                        <AnswerQuiz/>
                    </Route>
                    <Route path='/student/answerQuiz/:id'>
                        <AnswerSheet/>
                    </Route>
                    <Route path='/student/getResult/:id'>
                        <ResultList/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default StudentHome;