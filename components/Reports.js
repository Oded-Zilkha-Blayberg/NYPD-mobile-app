import React from 'react';
import Navbar from "./Navbar";
import { StyleSheet, View, Text, ImageBackground, ScrollView, SafeAreaView} from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider, Card, Avatar  } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ListItem, Button } from 'react-native-elements'


  getReports();
    
    async function getReports() {
         await fetch(`http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports`)
        .then(response =>  response.json())
        .then((json) => {   
            global.list = json;
        })
    };
  

export default function Reports() {
    return (
<SafeAreaView style= {{height: 500, width: 300}}>
        <ScrollView>
    {
      global.list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.event_type}</ListItem.Title>
            <ListItem.Subtitle>{l.criminal}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
      
    }
    
  </ScrollView>
  </SafeAreaView>
    );
}