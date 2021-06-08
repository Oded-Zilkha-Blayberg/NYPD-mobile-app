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
        width: 375,
    },
    inputs: {
        bottom: 120,
        borderBottomColor: "transparent"
    },
});

export default function Login(props) {
    return (
        <React.Fragment>
            <ImageBackground source={require('../assets/image.jpg')} style={styles.backgroundImage}>
                
                <Divider style={styles.inputs}>

                
                <Input placeholder='שם משתמש' writingDirection='rtl' rightIcon={
                    <Icon name='person' />
                }></Input>
                <Input placeholder='סיסמה' writingDirection='rtl' rightIcon={{ type: 'material', name: 'lock' }}></Input>
                <FAB color="#040848" title='התחבר' ></FAB>
                </Divider>
            </ImageBackground>
            
        </React.Fragment>
    );
}
