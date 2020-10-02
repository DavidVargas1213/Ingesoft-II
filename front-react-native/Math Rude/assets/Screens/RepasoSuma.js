import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  Text,View, 
  TextInput,
  Button } from 'react-native';
    
    
const tittle = { uri: "https://lh3.googleusercontent.com/-NRBcXhn9y-c/X3Y-yrD5ChI/AAAAAAAAQ78/tjkNgW471NMecIhqEZDtCvf2ME7jyd-oACLcBGAsYHQ/titulo%2Bsumar.PNG" };
const tittle2 = { uri: "https://lh3.googleusercontent.com/-s2eU6rUiVeo/X3Y_9GOACNI/AAAAAAAAQ8E/cEzj3zI3pII-rNUZIloXi0BWEqmrqsyEACLcBGAsYHQ/Sumas.PNG" };


export default class RepasoSuma extends React.Component{
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