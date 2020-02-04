import React, { Fragment, useState } from 'react';
import { Box, Grid, Typography, makeStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addDay, deleteDay } from '../../actions/categories';
import { selectCategory } from '../../actions/category';
import MyCategories from './MyCategories';

const Day = ({number, active, month, category, addDay, deleteDay, selectCategory, myCategories}) => {
    
    const classes = styles();

    const [openMassage, setOpenMassage] = useState(false);

    const handleClose = () => {
        setOpenMassage(false);
    };

    const handleAddDay = () => {
        if(myCategories&&myCategories.length>=3) {
            setOpenMassage(true);
            return
        };
        if(category.id) {
            const day = { 
                number,
                month,
                id:category.id
            }        
            addDay(day);
            selectCategory({});
        }
    };

    const handleDeleteDay = (id) => {        
        deleteDay({ 
            number,
            month,
            id
        });
    };

    return (
        <Fragment>
            <Grid onClick={handleAddDay} className={`${classes.root} ${active?classes.active:classes.disable}`} item>
                <Box className={classes.box}>
                    <Typography className={`${classes.span} ${active&&classes.nameActive}`}>{number}</Typography>
                    {myCategories && myCategories.length>0 && 
                        <MyCategories handleDelete={handleDeleteDay} myCategories={myCategories} />
                    }
                </Box>
            </Grid>
            <Dialog
                open={openMassage}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Full Day</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You can only add three categories in one day.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
        
    );
};

const styles = makeStyles(theme => ({
    root: {
        width: `${100/7}%`,
    },
    disable: {
        background: 'rgb(220, 220, 220)',
        border: `0.5px solid #3f51b5`
    },
    active: {
        background:'white',
        border: `0.5px solid #3f51b5`,
        cursor: 'pointer'
    },
    nameActive: {
        color: 'black',
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
    category: state.category
});

const mapDispatchToProps = dispatch => ({
    addDay: value => dispatch(addDay(value)),
    deleteDay: value => dispatch(deleteDay(value)),
    selectCategory: value => dispatch(selectCategory(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Day);