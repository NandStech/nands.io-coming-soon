import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import  Grid  from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

export default function Mobile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid container direction="row" justify="center" alignItems="center">
           <Grid xs={6}>

           </Grid>
           <Grid xs={6}>
                {/* <Paper elevation={6} color='secondary'>
                    hey
                </Paper> */}
           </Grid>
       </Grid>
      
      
    </div>
  );
}
