import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import NewReport from './views/NewReport.js'; //!!!!

export default function App() {
  return (
    <View style={styles.container}>
      <NewReport></NewReport> {/* !!! */}
      <Navbar></Navbar>
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


