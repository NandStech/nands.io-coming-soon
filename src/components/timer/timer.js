import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Grid from '@material-ui/core/Grid/Grid'
import Paper  from "@material-ui/core/Paper/Paper";
import { Typography } from "@material-ui/core";

// var date1 = new Date();
// var date2 = new Date("07/02/2020");

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 110,
  strokeWidth: 3
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <Typography variant='h5'className="time" style={{fontSize:'24px', textAlign:'center' }} color='neutral'>{time}</Typography>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timers() {
  const startTime = new Date().getTime() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date('Feb 08 2021 00:00:00 GMT+0100').getTime() / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  console.log(days);
  const daysDuration = days * daySeconds;

  return (
    <div>
      <Grid container direction="column" justify="space-between" alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="row" justify="center"alignItems="center" >
        <Typography variant='h1' style={{marginBottom:'.5em'}} color='neutral'>Everything is about to change !</Typography>
      </Grid>
      <Grid container direction="row" justify="center"alignItems="center" >
        <Typography variant='h3' style={{ marginBottom:'2em'}} color='secondary'>We're launching soon in</Typography>
      </Grid>
        <Grid container direction="row" justify="center"alignItems="center">
                <Grid item xs={2} sm={2}>
                    <CountdownCircleTimer {...timerProps} colors={[["#0C71B7"]]} trailColor='rgba(12, 113, 183, 0.2)' duration={daysDuration} initialRemainingTime={remainingTime}>
                        {({ elapsedTime }) =>
                        renderTime("days", getTimeDays(daysDuration - elapsedTime))
                        }
                    </CountdownCircleTimer>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <CountdownCircleTimer
                            {...timerProps}
                            colors={[["#689BFD"]]}
                            duration={daySeconds}
                            trailColor='rgba(104, 155, 253, 0.2)'
                            initialRemainingTime={remainingTime % daySeconds}
                            onComplete={(totalElapsedTime) => [
                            remainingTime - totalElapsedTime > hourSeconds
                            ]}
                        >
                            {({ elapsedTime }) =>
                            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                            }
                    </CountdownCircleTimer>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#68E1FD"]]}
                    trailColor='rgba(104, 225, 253, 0.2)'
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime % hourSeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                    }
                </CountdownCircleTimer>
                </Grid>
                
                <Grid item xs={2} sm={2}>
                    <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#F8B630"]]}
                    trailColor='rgba(248, 182, 48, 0.2)'
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                    ]}
                >
                    {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                    }
                </CountdownCircleTimer>
                </Grid>
            </Grid>
        </Grid>
      
      </Grid>
        
            
    </div>
  );
}