import React from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import { Button } from 'react-native-elements';
import { FAB } from 'react-native-elements';

const styles = StyleSheet.create({
  
  appBar: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: "row",
    position:"absolute",
    width: "100%",
    padding: 15,
    backgroundColor:'#f8f9fb',
    bottom: 0,
  },

  navIcon: {
    alignSelf: 'center',
    alignItems:'center',
    fontSize: 35
  },
  
  fabButton: {
    position: 'absolute',
    backgroundColor: '#040848',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

export default function Navbar({navigation}) {

  return (
    <React.Fragment>
        <Divider style={styles.appBar}>
            <Icon name='home' iconStyle={styles.navIcon} 
            onPress={() => navigation.navigate('login')}/>
            <Icon name='search' iconStyle={styles.navIcon}  
            onPress={() => navigation.navigate('identification')} />
            <FAB icon={{ name: "add", color: "white"}}
                color="#040848" 
                size="large"
                onPress={() => navigation.navigate('newReport')}/>

            <Icon name='map' iconStyle={styles.navIcon} 
            onPress={() => navigation.navigate('map')}/>
            <Icon name='announcement' iconStyle={styles.navIcon} />
        </Divider>

    </React.Fragment>
  );
}
