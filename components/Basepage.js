import React from 'react';
import Navbar from "./Navbar";
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // fontFamily:"heebo",
        fontSize: 25,
    },
    title: {
        padding: 20
    }
});

export default function Basepage(props) {
    return (
        <React.Fragment>
            <Divider style={styles.titleContainer}>
                <Icon name={props.icon} size="40px" color="white" iconStyle={styles.title}/>
                <h3>{props.title}</h3>
            </Divider>
            <View>
                {props.children}
            </View>
            <Navbar></Navbar>
        </React.Fragment>
    );
}
