import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import Box from "@material-ui/core/Box";
import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
    titleContainer: {
        backgroundColor:"#040848",
        color:"white",
        position:"absolute",
        top:"{40}",
        width:"100%",
        top:"0%",
        zIndex:"tooltip",
        borderRadius:"0px 0px 25px 25px",
      
    },
  }));

export default function Basepage() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
          <Box className={classes.titleContainer} p={7}>
                KKKKKKKKKKKKKKK
          </Box>
         <Navbar></Navbar>
      </React.Fragment>
    );
  }