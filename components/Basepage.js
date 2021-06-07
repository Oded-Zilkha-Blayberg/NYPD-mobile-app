import React from 'react';
import Navbar from "./Navbar";
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor:"#040848",
        color:"white",
        position:"absolute",
        width:"100%",
        height:"16%",
        top:"0%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontFamily:"Heebo-VariableFont"
    },
});

export default function Basepage(props) {
    return (
        <React.Fragment>
            <Divider style={styles.titleContainer}>
                <Icon name={props.icon} color="white" />
                <h3>{props.title}</h3>
            </Divider>
            <View>
                {props.children}
            </View>
            <Navbar></Navbar>
        </React.Fragment>
    );
}
