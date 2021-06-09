import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Picker, ScrollView , SafeAreaView} from 'react-native';
import sendReportToServer from "./utils";

export default function AccidentForm() {

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
    <Button title="Send" onPress={() => {buildAccidentReport()}} >
    </Button>
    </SafeAreaView>
  );

  let attacker = "";
  let injured = "";
  let injuredNumber = "";
  let reporter = ""; 
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
   time = selectedDate;
};

function setSelectedValue(text)  {
  region = text
};


function buildAccidentReport()  {
  let report = {
    'criminal': attacker,
    'casualties': injured,
    'number_of_casualties': injuredNumber,
    'event_time': time,
    'report_time': new Date(),
    'user_name': reporter,
    'region': region,
    'lat': 41,
    'lon': -73,
    'event_type': 4,
    'event_name':"תאונה"
  };
  
  sendReportToServer({report});
  alert("דיווח נשלח בהצלחה!");
};

}