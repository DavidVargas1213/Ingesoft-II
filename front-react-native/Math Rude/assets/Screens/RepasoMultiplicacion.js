import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  Text,View, 
  TextInput,
  Button } from 'react-native';
    
    
const tittle = { uri: "https://lh3.googleusercontent.com/-L3goJdpRWYs/X3ZNGFCM01I/AAAAAAAAQ8Q/dnhtEFL9gVs6VdTfkra0atOJ25hGR3RuwCLcBGAsYHQ/tituloMultiplicacion.PNG" };
const tittle2 = { uri: "https://lh3.googleusercontent.com/-hlUH1w9czg8/X3ZNIDzIQnI/AAAAAAAAQ8c/8B3MpGIDqSwyzDehuqTFh5pJItNFUCs4ACLcBGAsYHQ/Multiplicar.PNG" };


export default class RepasoMultiplicacion extends React.Component{
    render(){
        return(
             <View style={styles.container}>
                <ImageBackground source={tittle} style={{width: 350, height: 205}}></ImageBackground>
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