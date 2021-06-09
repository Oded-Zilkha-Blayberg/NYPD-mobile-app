import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IdentifyScreen from './views/IdentifyScreen';
import MapScreen from "./views/MapScreen";
import NewReportScreen from "./views/NewReportScreen";
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./views/LoginScreen";
import RNEventSource from 'react-native-event-source';




// Configure JSS
const Stack = createStackNavigator();
const options = { headers: { Authorization: 'Bearer ...' } };
const eventSource = new RNEventSource('http://siton-backend-securityapp3.apps.openforce.openforce.biz/users/login', options );
// ask gali for api


export default function App() {

  eventSource.addEventListener('message', (event) => {
    console.log(event.type); // message
    console.log(event.data);
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
              name="login" 
              component={LoginScreen} />
            <Stack.Screen
              name="identification"
              component={IdentifyScreen}
            />
            <Stack.Screen
              name="map"
              component={MapScreen}
            />
            <Stack.Screen 
              name="newReport" 
              component={NewReportScreen} />
          
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>


  );
}