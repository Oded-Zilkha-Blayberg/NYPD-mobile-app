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
import { WebView } from 'react-native-webview';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      writingDirection: 'ltr',
      
      // left: 0,
      // right: 0,
      // top: 0,
      // bottom: 0
    },
  });

  export default function IdentifyScreen ({ navigation }) {
    return (
        <StylesProvider jss={jss}>
          <View style={styles.container}>

              {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}


              {/* <iframe src="http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/icontrolmobile" /> */}
          <WebView
          // scalesPageToFit={true}
          // bounces={false}
          // javaScriptEnabled
          style={{ height: 800, width: 400 }}
          source={{ uri: 'http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/icontrolmobile'}}
          // {{
          //   html: `
          //         <!DOCTYPE html>
          //         <html>
          //           <head></head> 
          //           <body>
          //             <div id="baseDiv">'<iframe src="http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/icontrolmobile" style="width:1000, height:1000"/>'</div> //<--- add your iframe here
          //           </body>
          //         </html>
          //   `,
          // }}
          // automaticallyAdjustContentInsets={false}
        />


            <Navbar navigation ={navigation}></Navbar>
            <StatusBar style="auto" />

          </View>
      </StylesProvider>
    );
  };