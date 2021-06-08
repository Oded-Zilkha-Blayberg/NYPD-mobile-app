import React from 'react';
import { Divider, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';

export default function StabbingForm() {

  return (
    <Divider
    style={{
      borderBottomWidth: '0px',
    }}>
        <Input
        placeholder='מי הדוקר'
        style={{
            textAlign: 'right',
        }}
        />
        <Input
        placeholder='סוג נשק'
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
        value="{שם השוטר המחובר}"
        style={{
            textAlign: 'right',
        }}
        disabled
        />
    </Divider>
  );
}