import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Picker } from 'react-native';
import sendReportToServer from "./utils";

export default function KidnapForm() {

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
  let region ="";

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

function setSelectedValue(text)  {
  region = text
};

function buildKidnapReport()  {
  let report = {
    'criminal': attacker,
    'kidnapped': kidnapped,
    'last_place_known': place,
    'event_time': "11-20-2021",
    'report_time': new Date(),
    'user_name': reporter,
    'region': region,
    'lat': 41,
    'lon': -73,
    'event_type': 3,
    'event_name':"kidnap"
  };

  sendReportToServer({report});
  alert("דיווח נשלח בהצלחה!");
};
}