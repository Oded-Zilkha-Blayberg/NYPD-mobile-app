import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import sendReportToServer from "./utils";
import { Platform, Text, View, StyleSheet, Picker, ScrollView , SafeAreaView  } from 'react-native';
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
    <SafeAreaView>
    <ScrollView >
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
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => updateTime(event, selectedDate)}
        value={new Date()}
        mode="datetime"
        />
        
        <Text>איזור האירוע</Text>
         <Picker
            placeholder="בחר איזור"
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
            <Picker.Item label="ברונקס" value="ברונקס" />
            <Picker.Item label="מנהטן" value="מנהטן" />
            <Picker.Item label="ברוקלין" value="ברוקלין" />
            <Picker.Item label="קווינס" value="קווינס" />
            <Picker.Item label="סטייטן איילנד" value="סטייטן איילנד" />
        </Picker>

    </Divider>
    </ScrollView>
    <Button title="Send" onPress={() => {buildShootingReport()}} >
        </Button>
    </SafeAreaView>
  );

  let attacker = "";
  let weapon = "";
  let casualties = "";
  let reporter = "";
  let region ="";
  let time ="";

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

function updateTime (event, selectedDate) {
  time = selectedDate;
};

function setSelectedValue(text)  {
  region = text
};

function buildShootingReport()  {
  let report = {
    'criminal': attacker,
    'weapon_type': weapon,
    'casualties': casualties,
    'event_time': time,
    'report_time': new Date(),
    'user_name': reporter,
    'lat': currLocation.coords.latitude,
    'lon': currLocation.coords.longitude,
    'region': region,
    'event_type': 1,
    'event_name':"ירי"
  };

  sendReportToServer({report});
  alert("דיווח נשלח בהצלחה!");

};
}