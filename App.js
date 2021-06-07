import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Basepage from "./components/Basepage";


export default function App() {
  return (

    <View style={styles.container}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <Basepage title="hello I'm a temporary title" icon="build">
        <h1>
          hhhhhhhhhhhhhhh
        </h1>
      </Basepage>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


