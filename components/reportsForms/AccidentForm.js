import React, { useState, useEffect } from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import sendReportToServer from "./utils";
import { Platform, Text, View, StyleSheet } from 'react-native';
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
        <Text>זמן האירוע</Text>
        <DateTimePicker
        //placeholderText='תאריך האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="date"
        />
        <DateTimePicker
        //placeholderText='שעת האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="time"
        />
        <Text>זמן דיווח האירוע</Text>
        <DateTimePicker
        //placeholderText='תאריך דיווח האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="date"
        disabled={true}
        />
        <DateTimePicker
        //placeholderText='שעת דיווח האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="time"
        disabled={true}
        />
        <Input
        placeholder='מי דיווח'
        // value="{שם השוטר המחובר}"
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateReporter(text)}
        // disabled
        />

        <Button title="Send" onPress={() => {buildAccidentReport()}} >
        </Button>
    </Divider>
  );

  let attacker = "";
  let injured = "";
  let injuredNumber = "";
  let reporter = ""; 

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

async function buildAccidentReport()  {

  const currLocation = await Location.getLastKnownPositionAsync();

  let report = {
    'criminal': attacker,
    'casualties': injured,
    'number_of_casualties': injuredNumber,
    'event_time': "11-20-2021",
    'report_time': "09-15-2021",
    'user_name': reporter,
    'lat': currLocation.coords.latitude,
    'lon': currLocation.coords.longitude,
    'event_type': 4,
    'event_name':"accident"
  };

  console.log(report);
  sendReportToServer({report});
};

}