import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import sendReportToServer from "./utils";
import { Platform, Text, View, StyleSheet } from 'react-native';
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

        <Button title="Send" onPress={() => {buildKidnapReport()}} >
        </Button>

    </Divider>
  );

  let attacker = "";
  let kidnapped = "";
  let place = "";
  let reporter = ""; 

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

function buildKidnapReport()  {
  let report = {
    'criminal': attacker,
    'kidnapped': kidnapped,
    'last_place_known': place,
    'event_time': "11-20-2021",
    'report_time': "09-15-2021",
    'user_name': reporter,
    'lat': currLocation.coords.latitude,
    'lon': currLocation.coords.longitude,
    'event_type': 3,
    'event_name':"kidnap"
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