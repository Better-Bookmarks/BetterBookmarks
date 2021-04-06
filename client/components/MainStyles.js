import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 50,
    left: 'auto',
    position: 'fixed',
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    // padding: theme.spacing(3),
    overflow: 'auto',
    // backgroundColor: '#fcfcfc',
  },
  logoButton: {
    backgroundColor: '#64ffda',
    color: '#ff99bb',
  }
}));
