import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      textWeather: "Thunderstorm in the house",
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      textWeather: "Drizzle",
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      textWeather: "Raining like a MF",
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      textWeather: "Cold as balls",
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      textWeather: "Sunny as fuck",
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      textWeather: "Clouds",
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      textWeather: "Mist!",
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      textWeather: "Dusty",
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      textWeather: "Haze",
    }
  };

export default function Weather({temp, condition, city}) {
    return( 
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.city}>{city}</Text>
                <Text style={styles.weather}>{weatherOptions[condition].textWeather}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
      ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
      fontSize: 42,
      color: "white"
    },
    halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    city: {
      color: "white",
      fontSize: 44,
      fontWeight: "300",
      marginBottom: 10,
      textAlign: "left"
    },
    weather: {
      fontWeight: "600",
      color: "white",
      fontSize: 24,
      textAlign: "left"
    },
    textContainer: {
      alignItems: "flex-start",
      paddingHorizontal: 40,
      justifyContent: "center",
      flex: 1
    }
});