import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { days } from '../../constants';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';
import Day from './Day';

const DetailsMonth = ({currentMonth, categories}) => {
      
    const classes = styles();

    const [categoriesForDay, setCategoriesForDay] = useState({});
  
    useEffect(()=>{
        let forDay = {};
        const { name } = currentMonth;
        for (const category of categories) {
            if(category[name]) {
                const obj = {
                    name:category.name,
                    color:category.color,
                    id:category.id
                }
                for (const day of category[name]) {
                    let thisDay = forDay[`day${day}`]?[...forDay[`day${day}`]]:[];
                    if(thisDay.findIndex(elem=>elem.id===obj.id)===-1) {
                        thisDay = [...thisDay, obj];
                    };
                    forDay = {...forDay, [`day${day}`]:thisDay}
                }
            };
        }
        setCategoriesForDay(forDay);
    },[categories, currentMonth]);

    const Days = (() => {
        let arrayDays = [];
        if(currentMonth.initial!==0) {
            for (let index = (currentMonth.lastMonthDays-currentMonth.initial+1); index <= currentMonth.lastMonthDays; index++) {
                arrayDays = [...arrayDays,
                   <Day 
                        number={index}
                        active={false}
                        key={index}
                   />
                ]
            }
        }
        for (let index = 1; index <= currentMonth.days; index++) {
            arrayDays = [...arrayDays,
                <Day 
                    number={index}
                    active={true}
                    key={`${index}${currentMonth.days}`}
                    month={currentMonth.name}
                    myCategories={categoriesForDay[`day${index}`]}
                />
            ]
        }
        if(currentMonth.final!==6) {
            for (let index = 1; index <= 6-currentMonth.final; index++) {
                arrayDays = [...arrayDays,
                    <Day 
                        number={index}
                        active={false}
                        key={index}
                   />
                ]
            }
        }
        return arrayDays;
    })();

    return (
        <Grid container justify="flex-start" alignItems='stretch' spacing={0} >
            {days.map((day, index)=>
                <Grid className={`${classes.root} ${classes.nameDay}`} item key={index} >
                    <Box className={classes.box}>
                        <Typography className={`${classes.span} ${classes.name}`}>{day}</Typography>
                    </Box>
                </Grid>
            )}
            { Days }
        </Grid>
    );
};

const styles = makeStyles(theme => ({
    root: {
        width: `${100/7}%`,
    },
    nameDay: {
        background: '#3f51b5',
    },
    name: {
        color: 'white',
    },
    box: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    span: {
        textAlign:'center',
        width: '100%',
    },
}));

const mapStateToProps = state => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(DetailsMonth);