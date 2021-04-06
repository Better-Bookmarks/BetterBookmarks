import React, { useState, useEffect } from 'react';
import { Avatar, AppBar, Button, Box, Container, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, Grid, Toolbar, Typography, IconButton, Fab, Paper } from '@material-ui/core/';
import { Tabs, Tab} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import BookIcon from '@material-ui/icons/Book';


import useStyles from './MainStyles';
import Resource from './Resource'
import TopicTab from './TopicTab';


const Main = () => {

  // Declare a new state variable, which we'll call 'profile'
  // const [profile, setProfile] = useState(
  //   {
  //     // Initial profile state will look like this if it's a new user
  //     username: '',
  //     topics: {},
  //   }
  // );
  // Profile state will look like this if it's a logged in user
  // profile = {
  //   username: 'JasonLee4206969',
  //   topics: {
  //     'Oauth': {},
  //     'Recursive': {},
  //   }
  // }



  // USEEFFECT HOOK
  // essentially the componentDidMount() and componentDidUpdate() combined
    // if the components correctly mounted,
      // DO STUFF
  // useEffect(()=>{
    // FETCH THE USER PROFILE, GET REQUEST TO '/api/getProfile'
      // JSON the response
      // ON A GOOD REQ
        // SET STATE TO THE (WHATEVER THE BACKEND GIVES US)
        // setProfile(RESPONSE) 
        // RESPONSE NEEDS TO LOOK LIKE: 
          // {
          //   username: 'JasonLee4206969',
          //   topics: {
          //     'Oauth': {},
          //     'Recursive': {},
          //   }
          // }
        // HANDLE ERROR

    // OR USE AXIOS (but logic is same)
  // }, []);

  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect( () => {
  //   fetch('http://localhost:3000/api/getUser')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setProfile(result); // here is where is state gets change
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, []);

  

  // this.state = {
  //   profile = 
  //   isClicked = 
  //   isX
  // }


  // Fetch request for user topics and URLs
  // useEffect(() => {

  //   // const requestOptions = {
  //   //   method: 'PUT',
  //   //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   //   body: submitString
  //   // }

  //   fetch('http://localhost:3000/api/getProfile')
  //     .then((res) => res.json())
  //     .then((data) => setProfile(data))
  //     .catch((err) => res.status(400).send('Error is ', err))
  //   }, []);
  
  // const [ profile, setProfile ] = useState({
  //   _id: '',
  //   username: '',
  //   password: '',
  //   topics: [],
  // });




  // const [isLoaded, setIsLoaded] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect( () => {
  //   fetch('http://localhost:3000/api/getProfile')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setProfile(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, []);

  // const responseBody = profile;
  // console.log('This is our response body: ', responseBody);

  const responseBody = {
    username: 'username',
    password: 'password',
    topics: [
      {'OAuth' : {
        url1: 'This is my note',
        url2: 'This is my other note',
        },
      },
      {'Recursion': {
        }
      },
      {'Webpack yargs error': {
        url1: 'You\'re bad at webpack'
        }
      }
    ]
  }

  const classes = useStyles();

  const [ currentTopic, setCurrentTopic ] = useState(null);
  const [ currentResources, setCurrentResources ] = useState(null);
  const [ display, setDisplay] = useState([]);

  const handleChange = (newTopic, newResources) => {
    setCurrentTopic(newTopic);
    setCurrentResources(newResources);
  }

  const changeDisplay = () => {
    console.log('this is our current topic: ', currentTopic);
    console.log('these are our current resources: ', currentResources);
    const resourcesList = [];
    for (let resource in currentResources) {
      resourcesList.push(<Resource url={resource} description={currentResources[resource]} />)
    }
    setDisplay(resourcesList);
  }

  const [currentTab, setCurrentTab] = useState(Object.keys(responseBody.topics[0])[0])








  // Create an array of Topic Tabs from the data delivered from the database
  const topicsList = [];
  for (let i = 0; i < responseBody.topics.length; i++) {
    // topic = "Oauth",  resources = {url1: description1, url2: description2}
    // topicsList.push(<TopicTab key={i} topic={Object.keys(responseBody.topics[i])[0]} resources={responseBody.topics[i][Object.keys(responseBody.topics[i])[0]]} />);
    topicsList.push(
      <TopicTab 
        key={i} 
        topic={Object.keys(responseBody.topics[i])[0]} 
        resources={responseBody.topics[i][Object.keys(responseBody.topics[i])[0]]} 
        // currentTopic={setCurrentTopic} 
        // currentResources={setCurrentResources} 
        onChange={handleChange}
        changeDisplay = {changeDisplay}
      />);
  }

  

  useEffect(() => {
    // console.log('this is our current topic: ', currentTopic);
    // console.log('these are our current resources: ', currentResources);
    // const resourcesList = [];
    // for (let resource in currentResources) {
    //   resourcesList.push(<Resource url={resource} description={currentResources[resource]} />)
    // }
    // display = resourcesList;
    // console.log('this is our display: ', display)
    // const topicIndex;
    // for (let i = 0; i < responseBody.topics.length; i++) {
    //   if (currentTopic === Object.keys(responseBody.topics[i][0])) topicIndex = i;
    // }
    changeDisplay();
    // for(let path in responseBody.topics[topicIndex][currentTopic]) {
    //   resourcesList.push(<Resource url={path} description={responseBody.topics[topicIndex]}/>)
    // }
    // display = resourcesList;
  }, [currentTopic])

  // CREATING TOPICS TABS --------------------------------------------------
  const topicsArr = [];
  for (let i = 0; i < responseBody.topics.length; i++) {
    topicsArr.push(<Tab label={Object.keys(responseBody.topics[i])[0]} />)
  }
  // -----------------------------------------------------------------------


  // DIALOG HANDLING STATE MANAGEMENT --------------------------------------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // -----------------------------------------------------------------------


  // TAB HANDLING STATE MANAGEMENT -----------------------------------------
  const [value, setValue] = React.useState(0);
  // Oauth || Recursion || Webpack Yargs Error

  const handleChangeDialog = (event, newValue) => {
    setValue(newValue);
  };
  // -----------------------------------------------------------------------



  return (
    <div className={classes.root}>
      {/* APPBAR SECTION */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar variant="rounded" style={{backgroundColor: '#64ffda'}}>
              <BookIcon style={{color: '#ff99bb'}} />
            </Avatar>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Better Bookmarks
          </Typography>
          <Button variant="contained" color="secondary" style={{marginRight:'20px'}}>{responseBody.username}</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div>
          <Grid 
            container 
            spacing={3}
          >
            <Grid item xs={12}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  // onChange={handleChangeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  {topicsArr}
                  {/* <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" /> */}
                  
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          {topicsList}
          {display}
        </div>
      </main>
      
      <Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.floatingActionButton}>
        <AddIcon/>
      </Fab>
      {/* LOOK UP MATERIAL UI DIALOG */}
      {/* SEND TO BACKEND: USERNAME / TOPIC */}
        {/* UserObj : {
          username: 'JasonLee4206969'
          topics: {}
        } this object will be sent to '/api/getTopics' */}
        {/* AFTER SENDING THAT PAYLOAD, UPDATE 'profiles 'STATE OBJECT */}
          {/* after the state object gets updated, any components that are using the state object
          will see that state object was updated, AND THEN RERENDER */}
          {/* setProfile({
            username: 'NEWUSERNAME',
            topics: {
              'THENEWTOPICTHATTHEYJUSTTYPEDINTOTHEDIALOG'
            }
          }) */}
      <Dialog open={open} onClose={handleChangeDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add A New Topic</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your a new topic to resources list.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Topic"
            type="topics"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Main;