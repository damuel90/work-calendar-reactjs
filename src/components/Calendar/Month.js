import React, {useEffect, useState} from 'react';
import { Grid, Typography, makeStyles, Box, Badge } from '@material-ui/core';
import { connect } from 'react-redux';

const Month = ({name, number, year, handleCurrentMonth, collapsed, active, categories}) => {
    
  const classes = useStyles();
  const thisMonth = new Date().getMonth()===number;

  const [countCategory, setCountCategory] = useState(0);
  
  useEffect(()=>{
    let length = 0;
    for (const category of categories) {
      if(category[name]) length += category[name].length;
    }
    setCountCategory(length);
  },[categories, name]);
  
  const handleMonth = () => {
    const days = (Date.UTC(year, number+1,1) - Date.UTC(year, number,1))/1000/60/60/24;
    const initial = new Date(year, number, 1).getDay();
    const final = new Date(year, number, days).getDay();
    const lastMonthDays = (Date.UTC(year, number,1) - Date.UTC(year, number-1,1))/1000/60/60/24;
    handleCurrentMonth({
      name,
      number,
      days,
      initial,
      final,
      lastMonthDays,
    })
  }
    
  return (
    <Grid item xs={collapsed?1:4} onClick={handleMonth}>
      {collapsed? 
        <Box className={`${classes.btn} ${active && classes.btnActive}`}>
          {number+1}
        </Box>
        :
        <Box className={`${classes.box} ${thisMonth && classes.boxActive}`}>
            {countCategory!==0 &&
              <Box style={{position:'absolute', top:3, height:'100%', right:13, width:'10px'}}>
                <Badge color="primary" badgeContent={countCategory}></Badge>
              </Box>
            }
            <Typography className={`${classes.span} ${thisMonth && classes.spanActive}`}>{name}</Typography>
        </Box>
      }
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  box: {
    position: 'relative',
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    height: '80px',
    color: theme.palette.text.secondary,
    border: `0.5px solid rgb(232, 232, 232)`,
    cursor: 'pointer'
  },
  boxActive: {
    border: `0.5px solid #3f51b5`,
  },
  span: {
    textAlign:'center',
    width: '100%',
    cursor: 'pointer'
  },
  spanActive: {
    color: '#3f51b5',
    fontWeight: 'bold'
  },
  btnActive: {
    borderTop: 'none',
    fontWeight: 'bold',
    color: 'white',
    background: '#3f51b5'
  },
  btn: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    border:'0.5px solid #3f51b5',
    textAlign:'center',
    cursor: 'pointer'
  }
}));

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Month);