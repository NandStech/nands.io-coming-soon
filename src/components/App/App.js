import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withTheme } from "../Theme/Theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Button  from '@material-ui/core/Button/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Hero from "../hero/hero";
import Mobile from "../our services/mobile";
import Timers from "../timer/timer";
import "./App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(0),
    },
  },
  image:{
    width: "50%",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      width: '30%',
    },
  },
  container:{
    paddingTop: theme.spacing(17),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(7),
    },
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles2 = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));



function App(props) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.root}>

        <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar elevation={0} color='primary'>
          <Toolbar>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={4} sm={2}>
              <img  src= {require("../../assets/images/logo.png")} alt='logo' style={{width:'0%'}} />
            </Grid>

            <Grid item xs={7} sm={4}>
              <Grid container direction="row" justify="flex-end"alignItems="center">
                <Grid item xs={7} sm={4}>
                   <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="Dark Mode"
        />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
     <div  style={{ width: '100%' }}>
      <Box display="flex" justifyContent='center' display="flex"
        alignItems="center"
        className={classes.container}>
     
          <Grid container direction="row" justify="center"alignItems="center">
          <Grid item xs={12} sm={4}>
          <img src={require("../../assets/images/logo.png")} id="image" alt="logo"  className={classes.image}/>
          </Grid>
         
          <Grid item xs={12} sm={7}>
            <Timers/>
      
          </Grid>
         </Grid>
    
        
      </Box>
     </div>
      
          
      
     
        
    </div>
       
  );
}

export default withTheme(App);
