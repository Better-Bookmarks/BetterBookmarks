import React, { useState, useEffect } from 'react';
import { AppBar, Container, Grid, Toolbar, Typography, Button, IconButton, Fab, Paper } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './MainStyles';

import TopicsTab from './TopicsTab';

const Main = () => {
  // Declare a new state variable, which we'll call 'profile'
  const [profile, setProfile] = useState(
    {
      // Initial profile state will look like this if it's a new user
      username: 'NEWUSERNAME',
      topics: {},
    }
  );
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



  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* APPBAR SECTION */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Better Bookmarks
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              {/* CREATE THE TOPICS TABS USING profile.topics */}
                {/* <TopicsTab 
                  topics={profile.topics}
                /> */}
                grid item of size xs=12
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>grid item of size xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>grid item of size xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>grid item of size xs=3</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>grid item of size xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>grid item of size xs=3</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      
      <Fab color="primary" aria-label="add" className={classes.floatingActionButton}>
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
    </div>
  )
}

export default Main;