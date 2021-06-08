import React from 'react';
import { Divider, Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';

export default function ShootingForm() {

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
        // onChangeText={text => updateAttacker(text)}
        />
        <Input
        placeholder='סוג נשק'
        style={{
            textAlign: 'right',
        }}
        // onChangeText={text => updateWeapon(text)}
        />
        <Input
        placeholder='מספר נפגעים'
        style={{
            textAlign: 'right',
        }}
        keyboardType={'numeric'}
        // onChangeText={text => updateNumber(text)}
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

        <Button title="Send" onPress={() => {alert(1)}} >
        </Button>
    </Divider>
  );
}