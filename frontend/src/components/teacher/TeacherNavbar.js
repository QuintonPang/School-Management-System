import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import QuizIcon from '@mui/icons-material/Quiz';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const TeacherNavbar = () => {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Teacher
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button onClick={()=>history.push('/teacher/registerStudent')}>
            <ListItemIcon> 
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Student" />
          </ListItem>
          <ListItem button onClick={()=>history.push('/teacher/registerQuiz')}>
            <ListItemIcon>
              <QuizIcon />
            </ListItemIcon>
            <ListItemText primary="Add Quiz" />
          </ListItem>
          <ListItem button onClick={()=>history.push('/teacher/registerQuestion')}>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Add Question" />
          </ListItem>
          <ListItem button onClick={()=>history.push('/teacher/registerClass')}> 
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Add Class" />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>  
          <ListItem button onClick={()=>history.push('/teacher/studentList')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Student List" />
          </ListItem>
          <ListItem button onClick={()=>history.push('/teacher/quizList')}>
            <ListItemIcon>
              <QuizIcon />
            </ListItemIcon>
            <ListItemText primary="Question List" />
          </ListItem>
        </List>
        <List>  
         <ListItem button onClick={()=>history.push('/teacher/updateStudent')}>
            <ListItemIcon>
              <PersonSearchIcon />
            </ListItemIcon>
          <ListItemText primary="Update Student" />
          </ListItem>
          <ListItem button onClick={()=>history.push('/teacher/updateQuiz')}>
            <ListItemIcon>
              <ContentPasteSearchIcon />
            </ListItemIcon>
            <ListItemText primary="Update Quiz" />
          </ListItem>
          <ListItem button onClick={()=>history.push('/teacher/updateQuestion')}>
            <ListItemIcon>
              <ContentPasteSearchIcon />
            </ListItemIcon>
            <ListItemText primary="Update Question" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={()=>history.push('/teacher/deleteQuestion')}>  
            <ListItemIcon>
              <DeleteIcon sx={{color:"red"}} />
            </ListItemIcon>
            <ListItemText primary="Delete Quiz"  />
          </ListItem>
        </List>
        <List sx={{position:"absolute",bottom:"0px"}} >
          <ListItem  button onClick={()=>{ window.location.href="/account/logout"; alert("Logged out successfully"); }} >  
              <ListItemIcon>
                <LogoutIcon sx={{color:"red"}} />
              </ListItemIcon>
              <ListItemText primary="Log Out"  />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

export default TeacherNavbar;