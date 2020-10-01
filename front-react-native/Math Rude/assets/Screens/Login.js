import React, {Component} from 'react';
//import {createStackNavigator} from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import {ImageBackground, 
        StyleSheet,
        Text,View, 
        TextInput,
        Button } from 'react-native';
//import Login from './assets/Screens/Login';

const font = { uri: "https://1.bp.blogspot.com/-aEvtfSUfFGo/X2O05HZKNqI/AAAAAAAAQ6Y/QD8mxkExPtMYS3aq1-KARLaJcgokH-REACLcBGAsYHQ/s1018/WhatsApp%2BImage%2B2020-09-17%2Bat%2B1.06.54%2BPM.jpeg" };
const tittle = { uri: "https://1.bp.blogspot.com/-WbpBT4Jma3k/X2OzJNl6PdI/AAAAAAAAQ6E/mxNRjJ7q9UAvkvJAnzE4y-Zpt0E6X718wCLcBGAsYHQ/s588/tiitle.PNG" };

export default class Login extends React.Component {
  render(){
    return(
      <View  style={styles.container2}>
         <ImageBackground source={tittle} style={{width: 350, height: 120}}></ImageBackground>
        
            <View style = {styles.container}>
              <Text style={styles.welcome}></Text>
               <TextInput
                  style={styles.input}
                    placeholder="INGRESA TU NOMBRE"/>
                      <Button
                        color="#590871"
                        large
                        title='INGRESAR' 
                        //onPress={()=> navigate('Home')} 
                        />
                     </View>
                       <View style={styles.container}>
                         <ImageBackground source={font} style={{width: 350, height: 200}}></ImageBackground>
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
              justifyContent: "center",
              borderColor:'gray',
              marginBottom:25,
              padding:10,
              width : "90%",
              backgroundColor: 'white',
              borderRadius:4000,
              width:160
            },
            welcome:{
              padding:10,
              fontSize:30,
              textAlign:'center',
              color:'white'
            },
          
          });