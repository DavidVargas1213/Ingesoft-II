import React, {Component} from 'react';

import {ImageBackground, 
        StyleSheet,
        Text,View, 
        TextInput,
        Button } 
from 'react-native';


const font = { uri: "https://1.bp.blogspot.com/-aEvtfSUfFGo/X2O05HZKNqI/AAAAAAAAQ6Y/QD8mxkExPtMYS3aq1-KARLaJcgokH-REACLcBGAsYHQ/s1018/WhatsApp%2BImage%2B2020-09-17%2Bat%2B1.06.54%2BPM.jpeg" };
const tittle = { uri: "https://1.bp.blogspot.com/-WbpBT4Jma3k/X2OzJNl6PdI/AAAAAAAAQ6E/mxNRjJ7q9UAvkvJAnzE4y-Zpt0E6X718wCLcBGAsYHQ/s588/tiitle.PNG" };

export default class Login extends React.Component {
  render(){
    const{navigate}=this.props.navigation;
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
                        onPress={()=> navigate('Home')} 
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
              
              //justifyContent: "center",
              borderColor:'#590871',
              marginBottom:25,
              paddingLeft:20,
              padding:5,
              //paddingRight:30,
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