import React from 'react';
import { Divider, Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

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
        />
        <Input
        placeholder='מי הנחטף'
        style={{
            textAlign: 'right',
        }}
        />
        <Input
        placeholder='מיקום אחרון ידוע'
        style={{
            textAlign: 'right',
        }}
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