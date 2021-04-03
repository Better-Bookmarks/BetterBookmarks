import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Fab } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* APPBAR SECTION */}
      <AppBar position="static">
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

      
      <div>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

    </div>
  )
}

export default Main;