import React from 'react';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';
import FormCaregory from './FormCategoy';
import { connect } from 'react-redux';
import { deleteCategory } from '../../actions/categories';
import { selectCategory } from '../../actions/category';
import Category from './Category';

const Categories = ({categories, deleteCategory, selectCategory, category}) => {
    const classes = styles();
    const handleDelete = (id) => () => {
        if(id===category.id) selectCategory({})
        deleteCategory(id)
    };
    const handleSelect = (category) => () => selectCategory(category);
    return (
        <Grid className={classes.root} item xs={12} sm={4}>
            <Box className={classes.box}>
                <Typography className={classes.title} variant="h4" component="h2">Categories</Typography>
                <FormCaregory />
                <Grid container spacing={1} direction='row' className={classes.contentCategories}>
                    {categories.map(category=>
                        <Category
                            key={category.id} 
                            category={category}
                            handleDelete={handleDelete(category.id)}
                            handleSelect={handleSelect(category)}
                        />   
                    )}
                </Grid>
            </Box>
            
        </Grid>
    );
};

const styles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    title: {
        textAlign:'center',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    box: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        background: theme.palette.background.default,
        border:'0.5px solid #3f51b5',
        borderRadius:theme.spacing(1)
    },
    contentCategories: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));

const mapStateToProps = state => ({
    categories: state.categories,
    category: state.category
});

const mapDispatchToProps = dispatch => ({
    deleteCategory: value => dispatch(deleteCategory(value)),
    selectCategory: value => dispatch(selectCategory(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);