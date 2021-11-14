import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Row(props) {
  const { row,quizId, quiz } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' }}}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.quiz}
        </TableCell>
        <TableCell align="left">{quiz.quiz_name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Questions
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Question ID</TableCell>
                    <TableCell align="left">Choice A</TableCell>
                    <TableCell align="left">Choice B</TableCell>
                    <TableCell align="left">Choice C</TableCell>
                    <TableCell align="left">Choice D</TableCell>
                    <TableCell align="left">Correct Choice</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">
                            {row.question_id}
                        </TableCell>
                        <TableCell align="left"> 
                            {row.answer_a}
                        </TableCell>
                        <TableCell align="left">
                            {row.answer_b}
                        </TableCell>
                        <TableCell align="left">
                            {row.answer_c}
                        </TableCell>
                        <TableCell align="left">
                            {row.answer_d}
                        </TableCell>
                        <TableCell align="left">
                            {row.correct_choice}
                        </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function QuizList() {
    const [ quizzes, setQuizzes ] = React.useState([]);
    const [ questions, setQuestions ] = React.useState([]);
    React.useEffect(()=>{
        fetch("/api/getAllQuizzes")
        .then(res=>res.json())
        .then(data=>setQuizzes(data));


        fetch("/api/getAllQuestions")
        .then(res=>res.json())
        .then(data=>setQuestions(...questions,data))
        
    },[])
  return (
    <TableContainer className="frame" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Quiz ID</TableCell>
            <TableCell align="left">Quiz Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              quizzes.map((quiz)=>{
                return(
                  questions.filter((question)=>question.quiz===quiz.quiz_id).map((question)=>{
                  return(
                      <Row key={question.question_id} row={question} quiz={quiz}/>
                  )
                  })

              )})
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
