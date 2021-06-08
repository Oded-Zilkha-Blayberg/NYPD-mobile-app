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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // fontFamily:"heebo",
        fontSize: 25,
    },
    title: {
        padding: 20,
        color: 'white',
    }
});

export default function Basepage(props) {
    return (
        <React.Fragment>
            <Divider style={styles.titleContainer}>
                <Icon name={props.icon} size="40px" color="white" iconStyle={styles.title}/>
                <Text style={styles.title}>{props.title}</Text>
            </Divider>
            <View>
                {props.children}
            </View>
            <Navbar></Navbar>
        </React.Fragment>
    );
}
