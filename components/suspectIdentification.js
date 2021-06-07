import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navbar from "./Navbar";
import { SearchBar, Header } from 'react-native-elements';
import { Icon, Input, Card } from 'react-native-elements';
// import "@fontsource/heebo";

// working on searchbar

export default function suspectIdentification() {



  return (
    
    // <View className={classes.container}>
    <View>
     
     {/* <SearchBar
        placeholder="חיפוש לפי תעודת זהות"
        inputStyle={{backgroundColor: 'white'}}
        containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
       
      /> */}

<Input
  placeholder="תעודת זהות"
  style={{ textAlign: 'center' }}
  rightIcon={{ name: 'search' }}
  selectionColor='black'
/>

    <Card style={styles.card}>
      

     <Text style={{textAlign: 'center', fontSize: 32 }}>James Bond</Text>
     {/* fontFamily: 'Heebo' */}

     <Card.Divider />

       <Icon name="check" style={ isSuspected ? styles.disabledIcon : styles.activeIcon } color='green' size='180px' disabled='false' disabledStyle={{  backgroundColor: 'white' }}></Icon>
       <Icon name="close" style={ isSuspected ? styles.activeIcon : styles.disabledIcon } color='red' size='180px' disabled='true' disabledStyle={{  backgroundColor: 'white' }}></Icon>
      
       
    
     <Text style={ isSuspected ? styles.disabledHeader : styles.activeHeader }>אינו חשוד</Text> 
     <Text style={ isSuspected ? styles.activeHeader : styles.disabledHeader }>חשוד</Text> 

     </Card>
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
  activeHeader: {
    textAlign: 'center',
    fontSize: 18,
  },
  disabledHeader: { 
    textAlign: 'center',
    fontSize: 18,
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