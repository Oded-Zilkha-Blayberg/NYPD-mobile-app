import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "../components/Navbar";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import Basepage from "../components/Basepage";
import SuspectCard from "../components/suspectIdentification";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewReport from "../components/NewReport";


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      writingDirection: 'ltr',
    },
  });

  export default function IdentifyScreen ({ navigation }) {
    return (
        <StylesProvider jss={jss}>
          <View style={styles.container}>

              {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}

            <Basepage title="יצירת דיווח " icon="error" navigation={navigation}>
                <NewReport />              
            </Basepage>
            <StatusBar style="auto" />
          </View>
      </StylesProvider>
    );
  };