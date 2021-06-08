import React from 'react';
import Navbar from "./Navbar";
import { StyleSheet, View, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
// import "@fontsource/heebo";


const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor:"#040848",
        color:"white",
        position:"absolute",
        width:"100%",
        height:"12%",
        top:"0%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // fontFamily:"heebo",
        fontSize: 25,
    },
    title: {
        padding: 10,
        color: 'white',
        fontSize: 40
    },
    titleIcon: {
        padding: 10,
        color: 'white',
        fontSize: 30
    }
});

export default function Basepage(props) {
    return (
        <React.Fragment>
            <Divider style={styles.titleContainer}>
                {/* <Icon name="notifications" iconStyle={styles.title}/> */}
                <Icon name={props.icon} iconStyle={styles.titleIcon}/>
                <Text style={styles.title}>{props.title}</Text>
            </Divider>
            <View>
                {props.children}
            </View>
            <Navbar navigation ={props.navigation}></Navbar>
        </React.Fragment>
    );
}
