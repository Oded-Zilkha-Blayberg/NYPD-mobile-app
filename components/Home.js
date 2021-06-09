import React from 'react';
import Navbar from "./Navbar";
import { StyleSheet, View, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';



const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor:"#040848",
        color:"white",
        position:"absolute",
        width:"100%",
        height:"25%",
        top:"0%",
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,
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
        shadowColor: '#d6d6d6',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
    },
    innerCard: {
        width:100,
        height: 100,
    }, 
    cardIcon: {
        fontSize: 50,
        color:"#040848",

    }
});

export default function Home(props) {
    return (
        <React.Fragment>
            <Divider style={styles.titleContainer}>
                {/* <Icon name="notifications" iconStyle={styles.title}/> */}
                {/* <Icon name={props.icon} iconStyle={styles.titleIcon}/>
                <Text style={styles.title}>{props.title}</Text> */}
            </Divider>

            <View>
                <Divider style={styles.firstRow}>
                <TouchableOpacity onPress={() => alert(5)}>
                    <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                   

                        <Icon name="search" iconStyle={styles.cardIcon}></Icon>
                        <Text></Text>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert(5)}>
                    <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                        <Icon name="error" iconStyle={styles.cardIcon}></Icon>
                        <Text></Text>
                    </Card>
                    </TouchableOpacity>
                </Divider>
                <Divider style={styles.secondRow}>
                <TouchableOpacity onPress={() => alert(5)}>
                    <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                        <Icon name="map" iconStyle={styles.cardIcon}></Icon>
                        <Text></Text>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert(5)}>
                    <Card containerStyle={styles.outerCard} wrapperStyle={styles.innerCard}>
                        <Icon name="announcement" iconStyle={styles.cardIcon}></Icon>
                        <Text></Text>
                    </Card>
                    </TouchableOpacity>
                </Divider>
            </View>

            <Navbar navigation ={props.navigation}></Navbar>
        </React.Fragment>
    );
}