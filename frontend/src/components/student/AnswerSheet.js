import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useHistory } from "react-router-dom";
import { Grid } from "@mui/material";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;


  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const AnswerSheet = () =>{

  const history = useHistory();
  const { id } = useParams();
  
  const [ questions, setQuestions ] = useState([]);
  const  answers = [] ;
  const [ student, setStudent ] = useState({});

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
  
  const handleSubmit = () =>{


    for(var i=0;i<questions.length*4;i++){
      if (document.querySelectorAll("input")[i].checked){
        answers.push({id: document.querySelectorAll("input")[i].name, ans: document.querySelectorAll("input")[i].value});
      }    
    }

    answers.map((a)=>{

      const values = {
  
        result_student: student.student_id,
        result_student_answer: a.ans,
        result_question: a.id,

        is_correct:  (questions.filter((q)=>q.question_id==a.id)[0].correct_choice.toLowerCase() === a.ans.toLowerCase())?  true : false ,
      }
      
      const requestOptions = { 
        method: "POST", 
        headers: { 
          "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
  
  
        body: JSON.stringify(values),
      };

      fetch("/api/answerQuestions",requestOptions) 
    })

    history.push('/student/getResult/'+student.student_id)

  }

  useEffect(()=>{
      fetch('/api/getAllQuestions')
      .then(res=>res.json())
      .then(data=>setQuestions(data.filter(d=>d.quiz=id)));

      const username = document.getElementById("username").value;
    
      fetch('/api/getAllStudents')
      .then(res=>res.json())
      .then(data=>setStudent(data.filter((d)=>d.username==username)[0]))

  },[id]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ values, setValues ] = React.useState([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - questions.length) : 0;

  const handleChangePage = (event, newPage) => {
  setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
  };

  return (
  <TableContainer sx={{ maxWidth: "90vw" }} className="frame" component={Paper}>
      <Table sx={{ maxWidth: "90vw" }} aria-label="custom pagination table">
      <TableBody>
      <TableRow>
              <TableCell component="th" scope="row">
              No.
              </TableCell>
              <TableCell align="left">
              Question
              </TableCell>
              <TableCell align="left">
              Answer
              </TableCell>
          </TableRow>
          {(rowsPerPage > 0
          ? questions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : questions
          ).map((row,i) => (
          <TableRow key={row.question_id}>
              <TableCell component="th" scope="row">
              {i+1}.
              </TableCell>
              <TableCell align="left">
              {row.question}
              </TableCell>
              <TableCell sx={{flexDirection:"column",justifyContent:"space-between"}}>
                  <Grid>
                  <input type="radio" name={row.question_id} value="A"/>
                      {row.answer_a}
                  </Grid>
                  <Grid>
                  <input type="radio" name={row.question_id} value="B"/>
                      {row.answer_b}
                  </Grid>
                  <Grid>
                  <input type="radio" name={row.question_id} value="C"/>
                      {row.answer_c}
                  </Grid>
                  <Grid>
                  <input type="radio" name={row.question_id} value="D"/>
                      {row.answer_d}
                  </Grid>
              </TableCell>
          </TableRow>
          ))}
          <TableRow>
              <TableCell align="left">
              <Button variant="outlined" onClick={()=>handleSubmit()} >SUBMIT ANSWERS</Button>
              </TableCell>
          </TableRow>
          {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
          </TableRow>
          )}
      </TableBody>
      <TableFooter>
          <TableRow>
          <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={questions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
              inputProps: {
                  'aria-label': 'rows per page',
              },
              native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
          />
          </TableRow>
      </TableFooter>
      </Table>
  </TableContainer>
  );
}



export default AnswerSheet;