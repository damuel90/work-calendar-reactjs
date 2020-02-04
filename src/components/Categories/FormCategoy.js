import React, { useState, Fragment } from 'react';
import { makeStyles, TextField, FormControl, Button, Grid } from '@material-ui/core';
import InputColor from 'react-input-color';
import { addCategory } from '../../actions/categories';
import { connect } from 'react-redux';

const FormCaregory = ({addCategory}) => {

    const classes = styles();

    const [name, setName] = useState('');
    const [color, setColor] = useState({});
   
    const handleAddCategory = () => {
        addCategory({name, color:color.hex, id:new Date().getTime()});
        setName('');
    };

    const handleChange = (e) => setName(e.target.value);

    return (
        <Fragment>
            <Grid container direction='row' spacing={1}>
                <Grid item xs={3}>
                    <InputColor
                        initialHexColor="#5e72e4"
                        onChange={setColor}
                        placement="right"
                        style={{height:'57px',width:'100%',borderRadius:5}}
                    />
                </Grid>
                <Grid item xs={9}>
                    <FormControl fullWidth >
                        <TextField  
                            id="outlined-search" 
                            label="Category" 
                            type="text" 
                            variant="outlined" 
                            value={name}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Grid>
            </Grid>     
            <Button 
                className={classes.btn} 
                fullWidth 
                size="large" 
                variant="contained" 
                color="primary"
                onClick={handleAddCategory}
                disabled={name===''}
            >
                Add Category
            </Button>
        </Fragment>
    );
};

const styles = makeStyles(theme => ({
    btn: {
        marginTop: theme.spacing(1),
    }
}));

const mapDispatchToProps = dispatch => ({
    addCategory: value => dispatch(addCategory(value)),
})

export default connect(null, mapDispatchToProps)(FormCaregory);