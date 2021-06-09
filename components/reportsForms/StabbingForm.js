import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Picker, ScrollView , SafeAreaView } from 'react-native';
import sendReportToServer from "./utils";


export default function StabbingForm() {

  return (
    <SafeAreaView>
    <ScrollView >
    <Divider
    style={{
      borderBottomWidth: '0px',
    
    }}>
        <Input
        placeholder='מי הדוקר'
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
    <Button title="Send" onPress={() => {buildStabbingReport()}} >
        </Button>
    </SafeAreaView>
  );


  let attacker = "";
  let weapon = "";
  let casualties = "";
  let reporter = ""; 
  let region = "";
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

function buildStabbingReport()  {
  let report = {
    'criminal': attacker,
    'casualties': casualties,
    'weapon_type': weapon,
    'event_time': time,
    'report_time': new Date(),
    'user_name': reporter,
    'region': region,
    'lat': 41,
    'lon': -73,
    'event_type': 2,
    'event_name':"דקירה"
  };

  sendReportToServer({report});
  alert("דיווח נשלח בהצלחה!");
};
}