import React from 'react';
import Navbar from "./Navbar";
import { Icon, Input, FAB, Text, Image } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View, ImageBackground } from 'react-native';
// import { url } from 'inspector';
// import { Button } from '@material-ui/core';
// import "@fontsource/heebo";


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        // resizeMode: "cover",
        justifyContent: "flex-end",
        height: 500,
        width: 375
    }
});

export default function Login(props) {
    return (
        <React.Fragment>
            <ImageBackground source={require('../assets/login_screen_bg.JPG')} style={styles.backgroundImage}>
                
                <Input placeholder='שם משתמש' dir='rtl' rightIcon={
                    <Icon name='account_circle' />
                }></Input>
                <Input placeholder='סיסמה' dir='rtl' rightIcon={{ type: 'material', name: 'vpn_key' }}></Input>
                <FAB color="#040848" title='התחבר'></FAB>
            </ImageBackground>
            
        </React.Fragment>
    );
}
