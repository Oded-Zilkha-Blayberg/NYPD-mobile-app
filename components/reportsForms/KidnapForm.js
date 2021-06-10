import React, { useState, useEffect } from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import sendReportToServer from "./utils";
import { Platform, Text, View, StyleSheet, Picker, ScrollView , SafeAreaView } from 'react-native';
import * as Location from 'expo-location';

export default function KidnapForm() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

///////////////////////////
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
///////////////////////////

  return (
    <SafeAreaView>
    <ScrollView >
    <Divider
    style={{
      borderBottomWidth: '0px',
    }}>
        <Input
        placeholder='מי החוטף'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateAttacker(text)}
        />
        <Input
        placeholder='מי הנחטף'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateKidnapped(text)}
        />
        <Input
        placeholder='מיקום אחרון ידוע'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updatePlace(text)}
        />
        <Text>זמן האירוע</Text>
        <DateTimePicker
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => updateTime(event, selectedDate)}
        value={new Date()}
        mode="date"
        />
        
        <Text>איזור האירוע</Text>
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
    </ScrollView>
    <Button title="Send" onPress={() => {buildKidnapReport()}} >
        </Button>
    </SafeAreaView>
  );

  let attacker = "";
  let kidnapped = "";
  let place = "";
  let reporter = "גלי גרשטיין"; 
  let region ="";
  let time ="";

function updateAttacker(text)  {
  attacker = text
};
function updateKidnapped(text)  {
  kidnapped = text
};

function updatePlace(text)  {
  place = text
};

function updateReporter(text)  {
  reporter = text
};

function updateTime (event, selectedDate) {
  time = selectedDate;
};

function setSelectedValue(text)  {
  region = text
};


async function buildKidnapReport()  {
  const currLocation = await Location.getLastKnownPositionAsync();

  let report = {
    'criminal': attacker,
    'kidnapped': kidnapped,
    'last_place_known': place,
    'event_time': time,
    'report_time': new Date(),
    'user_name': global.user,
    'lat': currLocation.coords.latitude,
    'lon': currLocation.coords.longitude,
    'region': region,
    'event_type': 3,
    'event_name':"חטיפה"
  };

  sendReportToServer({report});
  alert("דיווח נשלח בהצלחה!");
};
}