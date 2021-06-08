import React, { useState } from 'react';
import ShootingForm from './reportsForms/ShootingForm.js';
import StabbingForm from './reportsForms/StabbingForm.js';
import KidnapForm from './reportsForms/KidnapForm.js';
import AccidentForm from './reportsForms/AccidentForm';
import { Chip, Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function NewReport() {
const [flag,setFlag]=useState(0);

  return (
    <Divider
    style={{
      borderBottomWidth: '0px',
      // position:"absolute",
      // top: 0,
      // flexDirection: "row",
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
          onPress={() => {setFlag(1)}}
          />
          
          <Chip
          title="דקירה"
          buttonStyle={{
            backgroundColor: '#ffa726',
            marginHorizontal: '5%',
          }}
          onPress={() => {setFlag(2)}}
          />

          <Chip
          title="חטיפה"
          buttonStyle={{
            backgroundColor: '#fdd835',
            marginHorizontal: '5%',
          }}
          onPress={() => {setFlag(3)}}
          />

          <Chip
          title="תאונה"
          buttonStyle={{
            backgroundColor: '#26a69a',
            marginHorizontal: '5%',
          }}
          onPress={() => {setFlag(4)}}
          />
       
        </Divider>
       {
         flag==1 ?
        <ShootingForm ></ShootingForm>
        : 
        flag==2 ?
        <StabbingForm></StabbingForm>
      :
      flag ==3 ? 
      <KidnapForm></KidnapForm>
      :
      flag==4 ?
      <AccidentForm></AccidentForm>
      :
      null
      
      }
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