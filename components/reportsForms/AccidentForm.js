import React, { useState, useEffect } from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import sendReportToServer from "./utils";
import { Platform, Text, View, StyleSheet, Picker, ScrollView , SafeAreaView } from 'react-native';
import * as Location from 'expo-location';




export default function AccidentForm() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <SafeAreaView>
    <ScrollView >
    <Divider
    style={{
      borderBottomWidth: '0px',
    }}>
        <Input
        placeholder='מי הפוגע'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateAttacker(text)}
        />
        <Input
        placeholder='מי הנפגע'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateInjured(text)}
        />
        <Input
        placeholder='מספר נפגעים'
        style={{
            textAlign: 'right',
        }}
        keyboardType={'numeric'}
        onChangeText={text => updateNumber(text)}
        />
        <Text style={{
            textAlign: 'right',
        }}>זמן האירוע</Text>
        <DateTimePicker
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => updateTime(event, selectedDate)}
        value={new Date()}
        mode="datetime"       
        />
        
        <Text style={{
            textAlign: 'right',
        }}>איזור האירוע</Text>
         <Picker 
            style={{ height: 150}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
            <Picker.Item label="ברונקס" value="ברונקס" />
            <Picker.Item label="מנהטן" value="מנהטן" />
            <Picker.Item label="ברוקלין" value="ברוקלין" />
            <Picker.Item label="קווינס" value="קווינס" />
            <Picker.Item label="סטייטן איילנד" value="סטייטן איילנד" />
        </Picker>
  
    </Divider>
    
    <Button title="Send" onPress={() => {buildAccidentReport()}} >
    </Button>
    </ScrollView>
    </SafeAreaView>
  );

  let attacker = "";
  let injured = "";
  let injuredNumber = "";
  let reporter = "גלי גרשטיין"; 
  let time = "";
  let region = ""; 

function updateAttacker(text)  {
  attacker = text
};
function updateInjured(text)  {
  injured = text
};

function updateNumber(text)  {
  injuredNumber = text
};

function updateReporter(text)  {
  reporter = text
};


function updateTime (event, selectedDate) {
  time = selectedDate || new Date();
};

function setSelectedValue(text)  {
 region = text
};



async function buildAccidentReport()  {

  const currLocation = await Location.getLastKnownPositionAsync();

  let report = {
    'criminal': attacker,
    'casualties': injured,
    'number_of_casualties': injuredNumber,
    'event_time': time,
    'report_time': new Date(),
    'user_name': global.user,
    'lat': currLocation.coords.latitude,
    'lon': currLocation.coords.longitude,
    'region': region,
    'event_type': 4,
    'event_name':"תאונה"
  };
  
  sendReportToServer({report});
  alert("דיווח נשלח בהצלחה!");
};

}