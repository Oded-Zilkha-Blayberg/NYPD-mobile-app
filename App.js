import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IdentifyScreen from './views/IdentifyScreen';
import MapScreen from "./views/MapScreen";
import NewReportScreen from "./views/NewReportScreen";
import { StyleSheet, Text, View } from 'react-native';



// Configure JSS
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
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