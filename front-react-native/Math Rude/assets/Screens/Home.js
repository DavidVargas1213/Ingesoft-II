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
const image1 = { uri: " https://lh3.googleusercontent.com/-pdcGnWE7YR8/X3Ya1Ihl-9I/AAAAAAAAQ7Q/bmByY7NlqasIbPewLA1WAx__BzHmOBJiwCLcBGAsYHQ/WhatsApp%2BImage%2B2020-09-24%2Bat%2B3.27.25%2BPM.jpeg"};
const image2 = { uri: "https://1.bp.blogspot.com/-FZ7j1TWsKrg/X2OeEPpAA8I/AAAAAAAAQ5U/7pd50wC5_QY_d6L7cLtAAZBrBoUfa7ySACLcBGAsYHQ/s793/img2.jpeg" };
const image3 = { uri: "https://lh3.googleusercontent.com/-VxPtzmWyLyc/X3Ya0CVGroI/AAAAAAAAQ7I/9K1ZRylF68sVfXWNptecjbd0l4V11uNeQCLcBGAsYHQ/WhatsApp%2BImage%2B2020-09-24%2Bat%2B3.27.25%2BPM%2B%25282%2529.jpeg" };

export default class Home extends React.Component {
    render(){
      return(
        <View  style={styles.container}>
        <ImageBackground source={tittle} style={{width: 350, height: 120}}></ImageBackground>
              <View style = {styles.containerAprendo}>
              <ImageBackground source={image1} style={{width: 350, height: 200}}></ImageBackground>
                <Button
                  color="#590871"
                  large
                  title='APRENDO' 
                 //onPress={()=> navigate('Aprendo')} 
                  />
               </View>
               <View style = {styles.containerCompito}>
               <ImageBackground source={image2} style={{width: 350, height: 200}}></ImageBackground>
                <Button
                  color="#590871"
                  large
                  title='COMPITO' 
                 //onPress={()=> navigate('Aprendo')} 
                  />
               </View>
               <View style = {styles.containerRepaso}>
               <ImageBackground source={image3} style={{width: 350, height: 200}}></ImageBackground>
                <Button
                  color="#590871"
                  large
                  title='REPASO' 
                 //onPress={()=> navigate('Compito')} 
                  />
               </View>
        </View>
        
        
      );
    }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      backgroundColor:'white'
    },
    containerAprendo: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerCompito: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerRepaso: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
  
    });