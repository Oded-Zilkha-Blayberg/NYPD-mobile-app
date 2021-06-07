import React from 'react';
import ShootingForm from '../components/reportsForms/ShootingForm.js';
import { Chip, Divider } from 'react-native-elements';

export default function NewReport() {

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

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
          marginBottom: '3vh',
        }}>
          <Chip
          title="ירי"
          buttonStyle={{
            backgroundColor: '#ef5350',
            marginHorizontal: '2vw',
            width: '17vw',
          }}
          />
          
          <Chip
          title="דקירה"
          buttonStyle={{
            backgroundColor: '#ffa726',
            marginHorizontal: '2vw',
            width: '17vw',
          }}
          />

          <Chip
          title="חטיפה"
          buttonStyle={{
            backgroundColor: '#fdd835',
            marginHorizontal: '2vw',
            width: '17vw',
          }}
          />

          <Chip
          title="תאונה"
          buttonStyle={{
            backgroundColor: '#26a69a',
            marginHorizontal: '2vw',
            width: '17vw',
          }}
          />
        </Divider>

        <ShootingForm></ShootingForm>
    </Divider>
  );
}
