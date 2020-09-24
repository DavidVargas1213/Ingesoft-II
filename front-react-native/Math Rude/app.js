import React, {Component} from 'react';
//import {createStackNavigator} from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import {ImageBackground, 
        StyleSheet,
        Text,View, 
        TextInput,
        Button } from 'react-native';
//import Login from './assets/Screens/Login';

const tittle = { uri: "https://1.bp.blogspot.com/-WbpBT4Jma3k/X2OzJNl6PdI/AAAAAAAAQ6E/mxNRjJ7q9UAvkvJAnzE4y-Zpt0E6X718wCLcBGAsYHQ/s588/tiitle.PNG" };

export default class Login extends React.Component {
    render(){
      return(
        <View  style={styles.container2}>
        <ImageBackground source={tittle} style={{width: 350, height: 120}}></ImageBackground>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white'
    },
    container2: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      backgroundColor:'white'
    },
  
  });