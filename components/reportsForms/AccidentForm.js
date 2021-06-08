import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';
// import console = require('console');

export default function AccidentForm() {

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

        <Button title="Send" onPress={() => {buildReport()}} >
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

function buildReport()  {
  let report = {
    'criminal': attacker,
    'casualties': injured,
    'number_of_casualties': injuredNumber,
    'event_time': "11-20-2021",
    'report_time': "09-15-2021",
    'user_name': reporter,
    'lat': 41,
    'lon': -73,
    'event_type': 4,
    'event_name':"try"
  };

  console.log(report);
  sendReportToServer({report});
};

async function sendReportToServer(report) {

  const response = await fetch(`http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports`, {
    method: 'POST', 
    // mode: 'no-cors', 
    headers: {'Content-Type': 'application/json'},
    
    body: JSON.stringify(report) 
    // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

}