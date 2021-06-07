import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import Box from "@material-ui/core/Box";
import Icon from '@material-ui/core/Icon';
import { StyleSheet, View } from 'react-native';



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
      
    }
  }));

export default function Basepage(props) {
    const classes = useStyles();

    return (
      <React.Fragment>
        <Box className={classes.titleContainer} p={7}>
            <Icon>{props.icon}</Icon>
            <h3>{props.title}</h3>
        </Box>
        <View>
            {props.children}
        </View>
        <Navbar></Navbar>
      </React.Fragment>
    );
  }