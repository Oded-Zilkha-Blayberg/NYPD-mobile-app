import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import Basepage from "./components/Basepage";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


export default function App() {
  return (
    <StylesProvider jss={jss}>
      <View style={styles.container}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <Basepage title="hello I'm a temporary title" icon="build">
          <h1>
            hhhhhhhhhhhhhhh
          </h1>
        </Basepage>
        <StatusBar style="auto" />
      </View>
  </StylesProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'rtl',
  },
});


