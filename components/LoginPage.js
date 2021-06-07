import React from 'react';
import Navbar from "./Navbar";
import { Icon, Input } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import "@fontsource/heebo";


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
        fontFamily:"heebo",
        fontSize: 25,
    },
    title: {
        padding: 20
    }
});

export default function Basepage(props) {
    return (
        <React.Fragment>
            <Input placeholder='שם משתמש' dir='rtl' rightIcon={
                <Icon name='account_circle' />
            }></Input>
            <Input placeholder='סיסמה' dir='rtl' rightIcon={{ type: 'material', name: 'vpn_key' }}></Input>
        </React.Fragment>
    );
}
