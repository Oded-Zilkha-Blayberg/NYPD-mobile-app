import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import NewReport from './views/NewReport.js'; //!!!!
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function App() {
  return (
    <StylesProvider jss={jss}>
      <View style={styles.container}>
        <NewReport></NewReport> {/* !!! */}
        <Navbar></Navbar>
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


