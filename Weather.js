import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';

export default function Weather({temp, city}) {
    return <View style={styles.container}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.temp}>{temp}°C</Text>
    </View>
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF688"
    },
    city: {
        flex: 1,
        color: "white",
        paddingVertical: 100,
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
    },
    temp: {
        flex: 1,
        color: "white",
        textAlign: "center",
        fontSize: 60,
        fontWeight: "bold"
    }
})