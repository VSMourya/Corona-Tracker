import React from 'react';
import { Card,CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';
import cx from 'classnames'


const Cards = ({data : {confirmed, recovered, deaths, lastUpdate},country,globalCases}) => {

    if (!confirmed){
        return <div> 
            <h2>"Loading..."</h2>
        </div>;
    }

    return (
      <div className={styles.container}>
        <Grid container spacing={1} justify="center">
            <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Infected
                </Typography>
                <Typography variant="h5" component="h2">
                <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Number of active cases of COVID-19.
                </Typography>
                { confirmed ?
                <Typography variant="body2" component="p" >
                {country ? country : "Worldwide"} Contribution to Global Cases : {<CountUp start={0}   end = {confirmed ? Math.ceil(((confirmed.value)*100)/globalCases.value) : "100" }duration={2.75} separator="," />} % 
                </Typography> : "Data Unavailable"
}   
            </CardContent>
            </Grid>
            <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Recovered
                </Typography>
                <Typography variant="h5" component="h2">
                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Number of recoveries from COVID-19.
                </Typography>

                <Typography variant="body2" component="p">
                {country} Recovery Rate : {<CountUp start={0}  end={ Math.ceil((recovered.value*100)/confirmed.value) } duration={2.75} separator="," />} %
                </Typography>

            </CardContent>
            </Grid>
            <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Deaths
                </Typography>
                <Typography variant="h5" component="h2">
                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Number of deaths caused by COVID-19.
                </Typography>
                
                <Typography variant="body2" component="p">
                {country} Death Rate : {<CountUp start={0}  end={ Math.ceil((deaths.value*100)/confirmed.value )} duration={2.75} separator="," />} %
                </Typography>

            </CardContent>
            </Grid>
        </Grid>
    </div>
 );
};

export default Cards