import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default function Loading() {
    return (<View style={styles.container}>
            <StatusBar barStyle="light-content"/>

        <Text style={styles.text}>Секундочку!</Text>
        <Text style={styles.textSec}>Сейчас про погоду все станет ясно</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "turquoise",
        padding: 20,

    },
    text: {
        color: 'white',
        fontSize: 44,
        fontWeight: "400",
        marginBottom: 10
    },
    textSec: {
        color: "white",
        fontWeight: "700",
        fontSize: 24
    }
})