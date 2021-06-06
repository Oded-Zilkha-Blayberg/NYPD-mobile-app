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

export default function suspectIdentification() {

  const classes = useStyles();

  return (
    <View className={classes.container}>
     
     <TextField id="outlined-basic" className={classes.input} placeholder="חיפוש תעודת זהות" variant="outlined" InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}></TextField> 

      <Text className={classes.header}>James Bond</Text>
    <div className={isSuspected = true ? classes.circle : classes.container}>
      <Paper variant="outlined"></Paper>
    </div>  


      <Navbar></Navbar>
      <StatusBar style="auto" />
    </View>
  );
}

let isSuspected = true
// turn into a prop of the component



const useStyles = makeStyles((theme) => ({
  circle: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(20),  
      backgroundColor: "#ff6757",
      borderRadius: '50%',
    },
  },
  container: {
    flex: 1,
    backgroundColor: "#ff6757",
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: "200px",
  },
  input: {
    direction: "rtl",
  },
}));  


// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: '#ff0000',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });


// fix styles, bad brackets