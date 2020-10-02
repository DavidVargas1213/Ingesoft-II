import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  Text,View, 
  TextInput,
  Button } from 'react-native';
    
    
const tittle = { uri: "https://lh3.googleusercontent.com/-qz-m8nvgTm0/X3ZNGTKQ_qI/AAAAAAAAQ8Y/jSgV1amZ4r4xTIIZYNRORNOrI43PwZH9gCLcBGAsYHQ/tituloRestar.PNG" };
const tittle2 = { uri: "https://lh3.googleusercontent.com/-sTRffqPmySg/X3ZNIhSbvpI/AAAAAAAAQ8g/UKs557BcOng8uSOBu483HC29qCDgymD2QCLcBGAsYHQ/Restas.PNG" };


export default class RepasoResta extends React.Component{
    render(){
        return(
             <View style={styles.container}>
                <ImageBackground source={tittle} style={{width: 350, height: 210}}></ImageBackground>
             <View style={styles.container}>
                <ImageBackground source={tittle2} style={{width: 350, height: 500}}></ImageBackground>
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