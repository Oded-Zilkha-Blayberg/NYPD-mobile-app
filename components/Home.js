import React from 'react';
import Navbar from "./Navbar";
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        // backgroundColor:"#040848",
        color:"white",
        position:"absolute",
        width:"100%",
        height:"40%",
        top:"0%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontSize: 25,
    },
    title: {
        padding: 10,
        color: 'white',
        fontSize: 40
    },
    username: {
        padding: 10,
        color: 'white',
        fontSize: 20
    },
    titleIcon: {
        padding: 10,
        color: 'white',
        fontSize: 30
    },
    firstRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderBottomColor: "transparent"

    },
    secondRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderBottomColor: "transparent"

    },
    outerCard: {
        borderColor: 'white',
        borderRadius: 10,
        shadowColor: '#d6d6d6',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
    },
    innerCard: {
        width:120,
        height: 120,
    }, 
    cardIcon: {
        padding: 10,
        fontSize: 50,
        color:"#040848",

    },
    subtitle: {
        padding: 10,
        color: '#4d4d4d',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default function Home({navigation}) {
    return (
        <React.Fragment>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.titleContainer}>
                <Text style={styles.username}>{global.user}</Text>
                <Text style={styles.title}>בוקר טוב, </Text>
                <ImageBackground source={global.userPicture} />
            </LinearGradient>
            
            {/* <Divider style={styles.titleContainer}>
                {/* <Icon name="notifications" iconStyle={styles.title}/> 
                <Text style={styles.username}>{global.user}</Text>
                <Text style={styles.title}>בוקר טוב, </Text>               
            </Divider> 
            */}

            <View>
                <Divider style={styles.firstRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('identification')}>
                        <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                            <Icon name="search" iconStyle={styles.cardIcon}></Icon>
                            <Text style={styles.subtitle}> זיהוי חשוד</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('newReport')}>
                        <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                            <Icon name="error" iconStyle={styles.cardIcon}></Icon>
                            <Text style={styles.subtitle}> יצירת דיווח</Text>
                        </Card>
                    </TouchableOpacity>
                </Divider>
                <Divider style={styles.secondRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('map')}>
                        <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                            <Icon name="map" iconStyle={styles.cardIcon}></Icon>
                            <Text style={styles.subtitle}>מפה</Text>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('allReports')}>
                        <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                            <Icon name="announcement" iconStyle={styles.cardIcon}></Icon>
                            <Text style={styles.subtitle}>כל הדיווחים </Text>
                        </Card>
                    </TouchableOpacity>
                </Divider>
                <Text >נוצר באהבה על ידי ולדימיר המלך, ענבר, עודד ומיכאל</Text>
            </View>

            <Navbar navigation = {navigation}></Navbar>
        </React.Fragment>
    );
}