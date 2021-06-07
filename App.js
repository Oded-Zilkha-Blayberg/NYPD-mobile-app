import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import Basepage from "./components/Basepage";
import NewReport from "./views/NewReport";
import SuspectCard from "./components/suspectIdentification";
import { SafeAreaProvider } from 'react-native-safe-area-context';



// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function App() {
  return (
    <SafeAreaProvider>
    <StylesProvider jss={jss}>
      <View style={styles.container}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <Basepage title="יצירת דיווח" icon="info">
          <NewReport />
        </Basepage>
        <StatusBar style="auto" />
      </View>
  </StylesProvider>
  </SafeAreaProvider>
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


