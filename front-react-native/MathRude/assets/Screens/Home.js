import React, {Component} from 'react';

import {ImageBackground, 
        StyleSheet,
        View, 
        Button } 
      from 'react-native';

export default class Home extends React.Component {
    render(){
      const{navigate}=this.props.navigation;
      return(
        <View  style={styles.container}>
        
              <View style = {styles.containerAprendo}>
              <ImageBackground source={require('../imagenes/AprendoHome.jpeg')} style={{width: 350, height: 200, }}></ImageBackground>
                <Button
                  color="#590871"
                  large
                  title='APRENDO' 
                 onPress={()=> navigate('Aprendo')} 
                  />
               </View>
               <View style = {styles.containerCompito}>
               <ImageBackground source={require('../imagenes/CompitoHome.jpeg')} style={{width: 350, height: 200}}></ImageBackground>
                <Button
                  color="#590871"
                  large
                  title='COMPITO' 
                 onPress={()=> navigate('Compito')} 
                  />
               </View>
               <View style = {styles.containerRepaso}>
               <ImageBackground source={require('../imagenes/RepasoHome.jpeg')} style={{width: 350, height: 200}}></ImageBackground>
                <Button
                  
                  color="#590871"
                  large
                  title='REPASO' 
                 onPress={()=> navigate('Repaso')} 
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
      //flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerCompito: {
      //flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
    containerRepaso: {
      //flex: 1,
      backgroundColor: '#fff', 
      justifyContent: 'center',
      backgroundColor:'white'
    },
  
    });