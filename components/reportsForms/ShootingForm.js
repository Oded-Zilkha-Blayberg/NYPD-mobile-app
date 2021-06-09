import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import sendReportToServer from "./utils";
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';



export default function ShootingForm() {

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
        placeholder='מי היורה'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateAttacker(text)}
        />
        <Input
        placeholder='סוג נשק'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateWeapon(text)}
        />
        <Input
        placeholder=' נפגעים'
        style={{
            textAlign: 'right',
        }}
        onChangeText={text => updateCasualties(text)}
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
        // disabled
        onChangeText={text => updateReporter(text)}
        />

        <Button title="Send" onPress={() => {buildShootingReport()}} >
        </Button>
    </Divider>
  );

  let attacker = "";
  let weapon = "";
  let casualties = "";
  let reporter = ""; 

function updateAttacker(text)  {
  attacker = text
};
function updateWeapon(text)  {
  weapon = text
};

function updateCasualties(text)  {
  casualties = text
};

function updateReporter(text)  {
  reporter = text
};

function buildShootingReport()  {
  let report = {
    'criminal': attacker,
    'weapon_type': weapon,
    'casualties': casualties,
    'event_time': "11-20-2021",
    'report_time': "09-15-2021",
    'user_name': reporter,
    'lat': currLocation.coords.latitude,
    'lon': currLocation.coords.longitude,
    'event_type': 1,
    'event_name':"shooting"
  };

  console.log(report);
  sendReportToServer({report});
};

// async function sendReportToServer(report) {
//   const response = await fetch(`http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports`, {
//     method: 'POST', 
//     // mode: 'no-cors', 
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(report) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// };
}