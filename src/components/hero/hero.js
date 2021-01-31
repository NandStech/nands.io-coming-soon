import React, { Component } from "react";
import { init } from "ityped";
import Typography  from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";


export default class Hero extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: true,
      strings: ["Website", "Mobile App", "UX Design", "Video Editing"]
    });
  }
  render() {
    return (
        <div>
         
          <Grid container direction="row" justify="center"  alignItems="center">
            <Grid item xs={7}>
              <Typography variant='h2' >
                Need a
                {'<'}
                <span>
                    <Typography variant='span' color='secondary' id="myElement">
                        
                    </Typography>
                </span>
                {'>'}
              </Typography>
              <Typography variant='p'>
                We are a team of experts committed to bring your dreams to life. 
              </Typography><br/>
              <Button variant='contained' color='secondary'> Get Started</Button>
            </Grid>
            <Grid item xs={5}>
            <img src= {require("../../assets/images/hero.gif")} alt='light' style={{width:'120%'}}/>
            </Grid>
          </Grid>
        
        
    </div>
    )
  }
}
