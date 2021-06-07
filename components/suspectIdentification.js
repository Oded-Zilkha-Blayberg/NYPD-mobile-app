import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navbar from "./Navbar";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Box from '@material-ui/core/Box';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

export default function suspectIdentification() {

  const classes = useStyles()

  return (

    <View className={classes.container}>
     
      <TextField id="outlined-basic" className={classes.input} placeholder="חיפוש תעודת זהות" variant="outlined" InputProps={{
        endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon className={classes.icon} />
              </IconButton>
            </InputAdornment>
        )
      }}></TextField> 

    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper"> 
      <div className={classes.header}>James Bond</div>
    </Box>

    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <CheckCircleRoundedIcon className={isSuspected == true ? classes.SuspiciousCircle : classes.UnsuspiciousCircle}/>
        {/* <div className={isSuspected == true ? classes.SuspiciousCircle : classes.UnsuspiciousCircle}>
          <Paper variant="outlined"></Paper>
        </div>   */}
    </Box>

      <Navbar></Navbar>

      <StatusBar style="auto" />

    </View>
  );
}

let isSuspected = false
// turn into a prop of the component



const useStyles = makeStyles((theme) => ({
  SuspiciousCircle: {
    color: 'red',
    fontSize: 200,
  },
  UnsuspiciousCircle: {
    color: 'green',
    fontSize: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#ff6757',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: "35px"
  },
  input: {
    direction: "rtl",
    float: "top",
  },
  icon: {
    float: "right",
    // wah
  },
}));  

// fix styles, bad brackets