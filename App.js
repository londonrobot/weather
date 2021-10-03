import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';

const API_KEY = "84a2519c46b2cf1685e7e5bf2f59e373";

export default class extends React.Component {
  state = {
      isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather, wind}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`); 
    this.setState({
      isLoading: false,
      temp: temp, 
      condition: weather[0].main,
      wind: wind.speed
    });
    // console.log(data);
  }

  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync();
      this.getWeather(latitude, longitude);
 
    } catch (error) {
      Alert.alert("Не могу определить местоположение", "Очень грустно :(") 
    }
  } 


  componentDidMount() {
    this.getLocation();
  }
  
  render () {
      const {isLoading, temp, condition, wind} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} wind={wind}/>
    ); 
  }
}

