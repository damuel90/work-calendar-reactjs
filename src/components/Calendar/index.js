import React, {  useState } from 'react';
import { months } from '../../constants';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';
import Month from './Month';
import DetailsMonth from './DatailsMonth';

const Calendar = (props) => {
    const classes = styles();

    const [currentMonth, setCurrentMonth] = useState(null);
    const date = new Date();
    const currentYear = date.getFullYear();
   
    const handleCurrentMonth = (month) => {
        if(currentMonth&&currentMonth.number===month.number) setCurrentMonth(null);
        else setCurrentMonth(month);
    };

    const activeButton = (number) => (currentMonth&&number===currentMonth.number);

    return (
        <Grid item xs={12} sm={8} className={classes.root}>
            <div className={currentMonth?null:classes.contentMonths}>
                {currentMonth===null?
                    <Typography className={classes.title1} variant="h4" component="h2">{currentYear}</Typography>
                    :
                    <Box className={classes.month}>
                        <Typography className={classes.title2} variant="h4" component="h2">{`${months[currentMonth.number]} - ${currentYear}`}</Typography>
                        <DetailsMonth 
                            currentMonth={currentMonth}
                        />
                    </Box>
                }
                <Grid container justify="center" alignItems="center" spacing={currentMonth===null?1:0} >
                    {months.map((month, index)=>
                        <Month 
                            name={month}
                            number={index}
                            year={currentYear}
                            key={index} 
                            handleCurrentMonth={handleCurrentMonth}
                            collapsed={currentMonth!==null}
                            active={activeButton(index)}
                        />
                    )}
                </Grid>
            </div>            
        </Grid>
    );
};

const styles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    title1: {
        textAlign:'center',
        color: theme.palette.primary.main,
    },
    contentMonths: {
        flexGrow:1,
        padding: theme.spacing(1),
        border: `0.5px solid #3f51b5`,
        borderRadius:theme.spacing(1)
    },

    title2: {
        textAlign:'center',
        color: 'white',
        marginBottom: theme.spacing(1),
    },
    month: {
        backgroundColor:'#3f51b5',
        padding: theme.spacing(1),
        borderTop:'0.5px solid #3f51b5',
        borderLeft:'0.5px solid #3f51b5',
        borderRight:'0.5px solid #3f51b5',
        borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0px 0px`
    },
}));

export default Calendar;