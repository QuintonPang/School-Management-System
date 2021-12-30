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


const ResultList = () =>{

  const history = useHistory();
  const { id } = useParams();
  
  const [ results, setResults ] = useState([]);
  const [ questions, setQuestions ] = useState([]);

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

useEffect(()=>{
    fetch('/api/getAllQuestions')
    .then(res=>res.json())
    .then(data=>setQuestions(data));
    
 
  },[questions]);

  useEffect(()=>{
    fetch("/api/getResult/"+id)
    .then(res=>res.json())
    .then(data=>{
        setResults(data)
    })

  },[id,results]) 

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ values, setValues ] = React.useState([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - results.length) : 0;

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    
    return ( questions!==undefined&&(
        <>
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
              Correct Answer
              </TableCell>
              <TableCell align="left">
              Your Answer
              </TableCell>
          </TableRow>
          {(rowsPerPage > 0
          ? results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : results
          ).map((row,i) => (
          <TableRow style={row.is_correct?{backgroundColor:"green"}:{backgroundColor:"red"}} key={row.result_id}>
              <TableCell component="th" scope="row">
              {i+1}.
              </TableCell>
              <TableCell align="left">
                    {questions.filter((q)=>q.question_id==row.result_question)[0]!==undefined&&questions.filter((q)=>q.question_id==row.result_question)[0].question}
              </TableCell>
              <TableCell >
                    {questions.filter((q)=>q.question_id==row.result_question)[0]!==undefined&&questions.filter((q)=>q.question_id==row.result_question)[0].correct_choice.toUpperCase()}
              </TableCell>
              <TableCell >
                    {row.result_student_answer}
              </TableCell>
          </TableRow>
          ))}
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
              count={results.length}
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
  <Grid container justifyContent={"center"} sx={{padding:"10px"}}>
      <Button  variant="outlined" onClick={()=>history.push("/student/answerQuiz")} >Return</Button>
  </Grid>
</>)

  );
}



export default ResultList;