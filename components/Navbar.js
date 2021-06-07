import React from 'react';
import { ThemeProvider, Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import { Button } from 'react-native-elements';
import { FAB } from 'react-native-elements';


const styles = StyleSheet.create({
  
  appBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    position:"absolute",
    width: "100%",
    padding: 20,
    backgroundColor:'#f8f9fb',
    bottom: 0,
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

export default function Navbar() {

  return (
    <React.Fragment>
        <Divider style={styles.appBar}>
            <Icon name='home' />
            <Icon name='search'/>
            <FAB icon={{ name: "add", color: "white"}}
                color="#040848" />

            <Icon name='map' />
            <Icon name='announcement' />
        </Divider>

        {/* <AppBar position="fixed" className={classes.appBar}>
            <BottomNavigation
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            showLabels
            className={classes.root}
            >
                <BottomNavigationAction label="בית" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction label="זיהוי חשוד" icon={<SearchRoundedIcon />} />
                <Fab aria-label="add" color="inherit" className={classes.fabButton}>
                    <AddIcon />
                </Fab>
                <BottomNavigationAction label="מפה" icon={<MapRoundedIcon />}/>
                <BottomNavigationAction label="דיווחים" icon={<AnnouncementRoundedIcon />}/>
            </BottomNavigation>                   
        </AppBar>  */}
    </React.Fragment>
  );
}
