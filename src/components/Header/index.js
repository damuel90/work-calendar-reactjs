import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const Header = ({category}) => {
    const classes = styles();
    return (
        <Paper className={classes.root} elevation={3}>
            <Typography className={classes.title} variant="h6" component="h3">{`Click on a day to add the category ${category}`}</Typography>
        </Paper>
    );
};

const styles = makeStyles(theme => ({
    root: {
        borderRadius: 0,
        background: theme.palette.primary.main,
        position:'fixed',
        top:0,
        left:0,
        width: '100%',
        zIndex: 100000000,
    },
    title: {
        textAlign:'center',
        color: 'white',

        padding: theme.spacing(1),
    },
}));

export default Header;