import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}> One</Text>
            <Text style={styles.boxTwo}> Two</Text>
            <Text style={styles.boxThree}> Three</Text>
            <Text style={styles.boxFour}> Four</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: 60,
        backgroundColor: 'blue'
    },

    boxOne: {
        flex: 1,
        backgroundColor: 'red',
        padding: 5
    },

    boxTwo: {
        flex: 2,
        backgroundColor: 'orange',
        padding: 10
    },

    boxThree: {
        flex: 3,
        backgroundColor: 'violet',
        padding: 20
    },

    boxFour: {
        flex: 4,
        backgroundColor: 'gold',
        padding: 40
    },


})