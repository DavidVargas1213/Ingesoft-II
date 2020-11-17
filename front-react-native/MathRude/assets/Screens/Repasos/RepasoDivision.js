import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  Text,View, 
  TextInput,
  Button } from 'react-native';

export default class RepasoDivision extends React.Component{
    render(){
        return(
             <View style={styles.container}>
                <ImageBackground source={require('../../imagenes/titulodivision.png')} style={{width: 350, height: 210}}></ImageBackground>
             <View style={styles.container}>
                <ImageBackground source={require('../../imagenes/repasodivision.png')} style={{width: 350, height: 420}}></ImageBackground>
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
});