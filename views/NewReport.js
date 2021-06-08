import React from 'react';
import ShootingForm from '../components/reportsForms/ShootingForm.js';
import StabbingForm from '../components/reportsForms/StabbingForm.js';
import KidnapForm from '../components/reportsForms/KidnapForm.js';
import AccidentForm from '../components/reportsForms/AccidentForm.js';
import { Chip, Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function NewReport() {
  let formToShow = "";

  return (
    <Divider
    style={{
      borderBottomWidth: '0px',
    }}>
        <Divider
        style={{
          borderBottomWidth: '0px',
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: '3%',
          justifyContent: 'center',
        }}>
          <Chip
          title="ירי"
          buttonStyle={{
            backgroundColor: '#ef5350',
            marginHorizontal: '5%',
          }}
          onPress={formToShow = "shooting"}
          />
          
          <Chip
          title="דקירה"
          buttonStyle={{
            backgroundColor: '#ffa726',
            marginHorizontal: '5%',
          }}
          onPress={formToShow = "stabbing"}
          />

          <Chip
          title="חטיפה"
          buttonStyle={{
            backgroundColor: '#fdd835',
            marginHorizontal: '5%',
          }}
          onPress={formToShow = "kidnap"}
          />

          <Chip
          title="תאונה"
          buttonStyle={{
            backgroundColor: '#26a69a',
            marginHorizontal: '5%',
          }}
          onPress={formToShow = "accident"}
          />
        </Divider>

        <ShootingForm></ShootingForm>
    </Divider>
  );
}


const styles = StyleSheet.create({
  show: {
  },
  hide: {
    display: 'none',
  },
});