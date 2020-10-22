import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  Text,View, 
  TextInput,
  Button } from 'react-native';
    
    
const tittle = { uri: "https://lh3.googleusercontent.com/-xwyxCJzZBr8/X3ZNGeXV1YI/AAAAAAAAQ8U/2E4biQrEALs8FxlGyfRzdp8k3RVgoKFmgCLcBGAsYHQ/tituloDivision.PNG" };
const tittle2 = { uri: "https://lh3.googleusercontent.com/-4iDuwlWl6u8/X3ZO97qGvgI/AAAAAAAAQ88/JWWj24ut5Ds3-HENo10AHAyLRi25Vxi4ACLcBGAsYHQ/Division.PNG" };


export default class RepasoDivision extends React.Component{
    render(){
        return(
             <View style={styles.container}>
                <ImageBackground source={tittle} style={{width: 350, height: 210}}></ImageBackground>
             <View style={styles.container}>
                <ImageBackground source={tittle2} style={{width: 350, height: 420}}></ImageBackground>
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