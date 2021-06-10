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
import AllReportsScreen from "./views/AllReportsScreen";
import HomePage from "./views/HomePage";



// Configure JSS
const Stack = createStackNavigator();
const eventsApi = `http://siton-backend-securityapp3.apps.openforce.openforce.biz/activities/inAction/${global.user}`

export default function App() {



///////////////////////
// setInterval(checkForUpdate, 15000);

// async function checkForUpdate() {
//   // alert('vova')

//   fetch(`${eventsApi}`, {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
// })
// .then((response) => {
//     if(!response.ok) {
//         if(response.status = userNotFound) {
//             throw new Error('problem with update');
//         }
//     }
// })
// .then(async (json) => {
//     if (json != null) {
//        alert('New update: ' + json)
//        // update
//     }
//     else {
//       alert('json null')
//       // no updates
//     }
// })
// .catch((error) => {
//     alert('whoops1, ' + error);
// });
// }

///////////////////////
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="login" 
              component={LoginScreen} />
            <Stack.Screen
              name="identification"
              component={IdentifyScreen} />
            <Stack.Screen
              name="map"
              component={MapScreen} />
            <Stack.Screen 
              name="newReport" 
              component={NewReportScreen} />
            <Stack.Screen 
              name="allReports" 
              component={AllReportsScreen} />
            <Stack.Screen 
              name="home" 
              component={HomePage} />
          
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>


  );
}