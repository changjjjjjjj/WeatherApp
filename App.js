import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const WEATHER_API_KEY = "cb5d8fde81305994b548f97f44c26975";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}&units=metric`)
    console.log(data);
    this.setState({isLoading: false, temp: data.main.temp, city: data.name});
  }

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch(error){
      Alert.alert("Location Error");
    }
  };

  componentDidMount(){
    this.getLocation();
  };

  render(){
    const { isLoading, temp, city} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} city={city}/>
    );
  }
}

