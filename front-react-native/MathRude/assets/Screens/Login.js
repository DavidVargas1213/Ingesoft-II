import React, {Component} from 'react';

import {ImageBackground, 
        StyleSheet,
        Text,View, 
        TextInput,
        Button } 
from 'react-native';


export default class Login extends React.Component {
  render(){
    const{navigate}=this.props.navigation;
    return(
      <View  style={styles.container2}>
         <ImageBackground source= {require('../imagenes/TituloLogin.PNG')} style={{width: 350, height: 120}}></ImageBackground>
        
            <View style = {styles.container}>
              <Text style={styles.welcome}></Text>
               <TextInput
                  style={styles.input}
                    placeholder="INGRESA TU NOMBRE"/>
                      <Button
                        color="#590871"
                        large
                        title='INGRESAR' 
                        onPress={()=> navigate('Home')} 
                        />
                     </View>
                       <View style={styles.container}>
                         <ImageBackground source= {require('../imagenes/BajaLogin.jpg')}style={{width: 400, height: 200}}></ImageBackground>
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
              justifyContent: 'center',
              backgroundColor:'white'
            },
            container2: {
              flex: 1,
              backgroundColor: '#fff', 
              alignItems: 'center',
              backgroundColor:'white'
            },
            
            image: {
              padding: 120,
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center"
            },

            image2: {
              width: 150, 
              height: 140,
            },
            welcome:{
              justifyContent: "center",
              padding:10,
              fontSize:30,
              textAlign:'center',
              color:'black'
            },
            input: {
              
              borderColor:'#590871',
              marginBottom:25,
              paddingLeft:20,
              padding:5,
              width : "90%",
              backgroundColor: 'white',
              borderRadius:10,
              borderWidth: 5,
              fontWeight: "bold",
            },
            welcome:{
              padding:10,
              fontSize:30,
              textAlign:'center',
              color:'white'
            },
          
          });