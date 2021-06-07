import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./Navbar";
import { SearchBar, Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';

// working on searchbar

export default function suspectIdentification() {



  return (
    
    // <View className={classes.container}>
    <View>
     
     <SearchBar
        placeholder="חיפוש לפי תעודת זהות"
      />

     <h1 style={{textAlign: 'center', fontSize: 30}}>James Bond</h1>
     
     <Icon name="check" style={ isSuspected ? styles.disabledIcon : styles.activeIcon } color='green' size='180px' disabled='false' disabledStyle={{  backgroundColor: 'white' }}></Icon>
     <Icon name="close" style={ isSuspected ? styles.activeIcon : styles.disabledIcon }color='red' size='180px' disabled='true' disabledStyle={{  backgroundColor: 'white' }}></Icon>

     <Navbar></Navbar>

     <StatusBar style="auto" />
      

    </View>
  );
}

let isSuspected = false
// turn into a prop of the component


const styles = StyleSheet.create({
  activeIcon: {
    
  },
  disabledIcon: {
    display: 'none',
  },
  suspectName: {
    textAlign: 'center',
  },
});

// container: {
//   flex: 1,
//   backgroundColor: '#ff6757',
//   alignItems: 'center',
//   justifyContent: 'center',
// },

// fix styles, bad brackets