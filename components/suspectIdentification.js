import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navbar from "./Navbar";
import { SearchBar, Header } from 'react-native-elements';
import { Icon, Input, Card } from 'react-native-elements';
import { func } from 'prop-types';
import ReactDOM from 'react-dom';


// import "@fontsource/heebo";

// working on searchbar

export default function suspectIdentification()  {
  const [suspectName, setSuspectName]=useState("");
  const [isSuspected, setIsSuspected]=useState("1");

// 1 - nothing
// 2 - unsuspected
// 3 - suspected
  return (
    
    // <View className={classes.container}>
    <View>


<Input
  placeholder="תעודת זהות"
  style={{ textAlign: 'center' }}
  rightIcon={<Icon name='search' onPress={() => {searchForSuspect()}} />}
  selectionColor='black'
  onChangeText={text => updateQuery(text)}
/>

    <Card id='personCard' style={styles.card}>
      

     <Text style={{textAlign: 'center', fontSize: 32 }}>{suspectName}</Text>
     

     <Card.Divider />

       <Icon name="check" style={ isSuspected == 2 ? styles.activeIcon : styles.disabledIcon } color='green' size='180px' disabled='false' disabledStyle={{  backgroundColor: 'white' }}></Icon>
       <Icon name="close" style={ isSuspected == 3 ? styles.activeIcon : styles.disabledIcon } color='red' size='180px' disabled='true' disabledStyle={{  backgroundColor: 'white' }}></Icon>
      
       
    
     <Text style={ isSuspected == 2 ? styles.activeHeader : styles.disabledHeader }>אינו חשוד</Text> 
     <Text style={ isSuspected == 3  ? styles.activeHeader : styles.disabledHeader }>חשוד</Text> 

     </Card>

    </View>
  );



let currQuery = ""

// turn into a prop of the component


// API

//base api : http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/
// id for true or false
// api : http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/suspected/{ID}
// api for finding info by id
// api : http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/persons/{ID}

// updateQuery will update the current search value (currQuery)

function updateQuery(text)  {
 
  currQuery = text
}

async function searchForSuspect() {

  checkIfSubmit();
  let suspectInfo = await getSuspectInfo(currQuery);
  // console.log(isSuspected)
  if (isSuspected == true) {
    
  }
  else {
    // unsuspected
  }

}

function checkIfSubmit() {
  
      return fetch(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/suspects/suspected/${currQuery}`)
              .then((response) => response.json())
              .then((json) => {
                if (json == false)
                setIsSuspected(2)
                else {
                  setIsSuspected(3)
                }
              })
              .catch((error) => {
                console.error('whoops, ' + error);
              });
}

function getSuspectInfo(id) {

        return fetch(`http://intelligence-api-git-2-intelapp1.apps.openforce.openforce.biz/api/persons/${id}`)
              .then((response) => response.json())
              .then((json) => {
                setSuspectName(json.firstName + " " + json.lastName);
                return json;
              })
              .catch((error) => {
                console.error('whoops, ' + error);
              });
}

}

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