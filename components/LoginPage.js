import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Icon, Input, FAB, Text, Image } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet, View, ImageBackground } from 'react-native';

// import "@fontsource/heebo";

const loginAPI = 'http://siton-backend-securityapp3.apps.openforce.openforce.biz';


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
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <React.Fragment>
            <ImageBackground source={require('../assets/image.jpg')} style={styles.backgroundImage}>
                
                <Divider style={styles.inputs}>

                
                <Input placeholder='שם משתמש' writingDirection='rtl' onChangeText={text => setUserName(text)} rightIcon={
                    <Icon name='person' />
                }></Input>
                <Input placeholder='סיסמה' writingDirection='rtl' onChangeText={text => setPassword(text)} rightIcon={{ type: 'material', name: 'lock' }}></Input>
                <FAB onPress={() => 
                    attemptLogin()} color="#040848" title='התחבר' ></FAB>
                </Divider>
            </ImageBackground>
            
        </React.Fragment>
    );
}

const userNotFound = 404;
const incorrectPassword = 403;

async function attemptLogin() {
    fetch(`${loginAPI}/users/`, {
        method: 'POST',
        body: {
            userName: userName,
            password: password
        }
    })
    .then((response) => {
        if(!response.ok) {
            if(response.status = userNotFound) {
                throw new Error('User not found');
            } else if(response.status = incorrectPassword) {
                throw new Error('Incorrect password');
            }
        }

        return response.json();
    })
    .then((json) => {
        //this will return the authentication token, and we will need to save it and go to the main page
    })
    .catch((error) => {
        alert(error);
    });
}
