import React from 'react';
import { Grid, Chip, Avatar } from '@material-ui/core';

const Category =  ({category, handleDelete, handleSelect}) => (
    <Grid item key={category.id}>
        <Chip
            avatar={<Avatar style={{background:category.color,border:'0.5px solid #3f51b5'}}>{category.name.charAt(0)}</Avatar>}
            label={category.name}
            clickable
            color='primary'
            onDelete={handleDelete}
            variant="outlined"
            onClick={handleSelect}
        />
    </Grid>
);

export default Category;