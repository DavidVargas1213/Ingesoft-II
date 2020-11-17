import React from 'react';
import {ImageBackground, 
        StyleSheet,
        Text,View, 
        TouchableOpacity
      } from 'react-native';

export default class Compito extends React.Component {

    render(){
      
      const{ navigate }=this.props.navigation;

      return(
        <View  style={styles.container}>
        <ImageBackground source={require('../imagenes/titulocompito.png')} style={styles.image}></ImageBackground>
        <View style={styles.containerBottoms}>
         
          <View>
           <TouchableOpacity onPress={() => navigate('JuegoSuma')}>
             <Text style = {styles.bottom1}>
                 SUMA         
               </Text> 
        </TouchableOpacity>
          </View> 
        <View>
            <TouchableOpacity onPress={() => navigate('JuegoResta')}>
              <Text style = {styles.bottom2}>
                 
                 RESTA
                 
                </Text> 
            </TouchableOpacity>
        </View> 
        <View>
            <TouchableOpacity onPress={() => navigate('JuegoMultiplicacion')}>
              <Text style = {styles.bottom3}>
                
                MULTIPLICACION
                
                </Text> 
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigate('JuegoDivision')}>
                <Text style = {styles.bottom4}>
                  DIVISION
                </Text> 
            </TouchableOpacity>
        </View> 
        </View>
               <ImageBackground source={require('../imagenes/bajacompito.png')} style={styles.image2}></ImageBackground>
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
    image: {
      
      flex:3,
      paddingLeft: 420,
      paddingTop: 90,
    },
    image2: {
      flex:1,
      paddingLeft: 170,
      paddingTop: 100,
      marginRight: '50%'
    },
    bottom1:{
      fontFamily : 'Cochin',
      paddingLeft: 60,
      paddingHorizontal: 3,
      paddingVertical: 3,
      //marginVertical: 20,
      
      borderRadius:10,
      borderWidth: 5,
      marginBottom:10,
      borderColor: 'lime',
      fontSize: 20,
      fontWeight: "bold",
      color: 'green',
      paddingBottom: 3,
      backgroundColor: 'black'
    },
    bottom2:{
    fontFamily : 'Cochin',
      
      paddingLeft:60,
      
      marginBottom:10,
      borderRadius:10,
      borderWidth: 5,
      borderColor: 'lime',
      fontSize: 20,
      fontWeight: "bold",
      color: 'green',
      justifyContent:'center',
      alignItems: 'center',
      
      
      backgroundColor: 'black'
    },
    bottom3:{
      fontFamily : 'Cochin',
      paddingLeft:3,
      //paddingVertical:3,
      //marginHorizontal:20,
      marginBottom:10,
      borderRadius:10,
      borderWidth: 5,
      borderColor: 'lime',
      fontSize: 20,
      fontWeight: "bold",
      color: 'green',
      paddingBottom: 3,
      backgroundColor: 'black'
    },
    bottom4:{
      fontFamily : 'Cochin',
      paddingLeft:50,
      paddingHorizontal:3,
      paddingVertical:3,
      borderRadius:10,
      borderWidth: 5,
      borderColor: 'lime',
      fontSize: 20,
      fontWeight: "bold",
      color: 'green',
      paddingBottom: 3,
      backgroundColor: 'black'
    },
    containerBottoms:{
      //flexDirection: 'row', 
      marginTop:'10%'
    },
  });