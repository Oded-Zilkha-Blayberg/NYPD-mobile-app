import React from 'react';
import { Divider, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

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
        />
        <Input
        placeholder='מי הנפגע'
        style={{
            textAlign: 'right',
        }}
        />
        <Input
        placeholder='מספר נפגעים'
        style={{
            textAlign: 'right',
        }}
        keyboardType={'numeric'}
        />
        <DateTimePicker
        placeholderText='תאריך האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="date"
        />
        <DateTimePicker
        placeholderText='שעת האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="time"
        />
        <DateTimePicker
        placeholderText='תאריך דיווח האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="date"
        disabled
        />
        <DateTimePicker
        placeholderText='שעת דיווח האירוע'
        testID="dateTimePicker"
        is24Hour={true}
        display="default"
        value={new Date()}
        mode="time"
        disabled
        />
        <Input
        placeholder='מי דיווח'
        value="{שם השוטר המחובר}"
        style={{
            textAlign: 'right',
        }}
        />
    </Divider>
  );
}