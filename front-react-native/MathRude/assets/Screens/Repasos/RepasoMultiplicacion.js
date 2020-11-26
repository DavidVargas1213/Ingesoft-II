import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  Text,View, 
  TextInput,
  ScrollView,
  Button } from 'react-native';
    
export default class RepasoMultiplicacion extends React.Component{
    render(){
        return(
               <ScrollView>
             <View style={styles.container}>
                <ImageBackground source={require('../../imagenes/titulomultiplicacion.png')} style={{width: 350, height: 205}}></ImageBackground>
             <View style={styles.container}>
                <ImageBackground source={require('../../imagenes/repasomultiplicar.png')} style={{width: 350, height: 500}}></ImageBackground>
             </View>
        </View>
               </ScrollView>
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