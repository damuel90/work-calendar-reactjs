import React, { Fragment } from 'react';
import Calendar from './components/Calendar';
import Categories from './components/Categories';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import { connect } from 'react-redux';

const App = ({ category }) => {
  return (
    <Fragment>
      {category.name&&
        <Header category={category.name} />
      }
      <Grid 
        style={{marginTop:category.name?'48px':'0px'}} 
        container  
        direction="row" 
        justify="center" 
        alignItems="flex-start" 
      >
        <Categories />
        <Calendar />
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  category: state.category
});

export default connect(mapStateToProps)(App);
