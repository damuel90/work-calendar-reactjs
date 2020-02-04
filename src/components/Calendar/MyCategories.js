import React from 'react';
import { Grid, Paper, Avatar } from '@material-ui/core';

const MyCategories = ({myCategories, handleDelete}) => {

    const handleDeleteCategory = (id) => () => handleDelete(id);
    
    return (
        <Grid alignItems='center' alignContent='center' spacing={1} style={styles.root}  container direction='row' >
            {myCategories.map(category => 
                <Grid item key={category.id} onClick={handleDeleteCategory(category.id)}> 
                    <Paper style={styles.paper} elevation={4}>
                        <Avatar style={styles.avatar(category)}>
                            {category.name.charAt(0)}
                        </Avatar>
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
};

const styles = {
    root: {
        padding:'0px 5px'
    },
    paper: {
        width:25,
        height:25,
        borderRadius:25,
    },
    avatar: (category) => ({
        width:'100%',
        height:'100%',
        textAlign:'center',
        background:category.color,
        fontSize:15,
        border:'0.5px solid #3f51b5',
    }),
};

export default MyCategories;