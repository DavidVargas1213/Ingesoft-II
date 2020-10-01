import React, {Component} from 'react';
//import {createStackNavigator} from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import {ImageBackground, 
        StyleSheet,
        Text,View, 
        Button } from 'react-native';
//import Login from './assets/Screens/Login';

const tittle = {uri:"https://lh3.googleusercontent.com/-6LUHcolXwj0/X3Y2vHivpZI/AAAAAAAAQ7w/jCObLBNQWc4QRQZ4S0wNpkipRlOQ8RdLQCLcBGAsYHQ/Titulo%2BRepaso.PNG" };

export default class Repaso extends React.Component {
    render(){
      return(
        <View  style={styles.container}>
        <ImageBackground source={tittle} style={{width: 350, height: 200}}></ImageBackground>
        <View style = {styles.containerSuma}>
        
                <Button
                  color="orange"
                  large
                  title='SUMAS' 
                 //onPress={()=> navigate('RepasoSuma')} 
                  />
               </View>
               <View style = {styles.containerResta}>
               
                <Button
                  color="orange"
                  large
                  title='RESTAS' 
                 //onPress={()=> navigate('RepasoResta')} 
                  />
               </View>
               <View style = {styles.containerMultiplicacion}>
               
                <Button
                  color="orange"
                  large
                  title='MULTIPLICACIONES' 
                 //onPress={()=> navigate('RepasoMultiplicacion')} 
                  />
               </View>
               <View style = {styles.containerDivision}>
               
                <Button
                  color="orange"
                  large
                  title='DIVISIONES' 
                 //onPress={()=> navigate('RepasoDivision')} 
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
    containerSuma: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerResta: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerMultiplicacion: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerDivision: {
      flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    }
  
  });