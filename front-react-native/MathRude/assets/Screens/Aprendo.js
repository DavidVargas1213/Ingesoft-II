import React, {Component} from 'react';
//import {createStackNavigator} from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import {ImageBackground, 
        StyleSheet,
        Text,
        View, 
        TouchableOpacity,
      
      } from 'react-native';

//import Login from './assets/Screens/Login';

// const tittle = {uri:"https://lh3.googleusercontent.com/-6LUHcolXwj0/X3Y2vHivpZI/AAAAAAAAQ7w/jCObLBNQWc4QRQZ4S0wNpkipRlOQ8RdLQCLcBGAsYHQ/Titulo%2BRepaso.PNG" };
// const down = {uri: 'https://lh3.googleusercontent.com/-WpeUpVfQky0/X5HlQCJJWdI/AAAAAAAARBk/xOpyDL9p72817XCiJ7vb_DCQAt8QZJ4KACLcBGAsYHQ/Baja%2Brepaso.jpeg'};

export default class Repaso extends React.Component {
    render(){
      const{navigate}=this.props.navigation;
      return(
        <View  style={styles.container}>
        <ImageBackground 
          source={require('../imagenes/tituloaprendo.png')} 
          style={{ width: 350, height: 250, }}></ImageBackground>

        <View style={styles.containerBottoms}>
          <View>
           <TouchableOpacity onPress={() => navigate('AprendoSuma')}>
             <Text style = {styles.bottom1}>
                 SUMA         
               </Text> 
        </TouchableOpacity>
          </View> 
        <View>
            <TouchableOpacity onPress={() => navigate('AprendoResta')}>
              <Text style = {styles.bottom2}>
                 
                 RESTA
                 
                </Text> 
            </TouchableOpacity>
        </View> 
        <View>
            <TouchableOpacity onPress={() => navigate('AprendoMultiplicacion')}>
              <Text style = {styles.bottom3}>
                
                MULTIPLICACION
                
                </Text> 
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigate('AprendoDivision')}>
              <Text style = {styles.bottom4}>
                
                DIVISION
                
                </Text> 
            </TouchableOpacity>
        </View> 
        </View>
                
               <ImageBackground source={require('../imagenes/bajarepaso.jpeg')} style={styles.image2}></ImageBackground>
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
    bottom1:{
      fontFamily : 'Cochin',
      paddingLeft:60,
      paddingHorizontal:3,
      paddingVertical:3,
      marginBottom:10,
      borderRadius:10,
      borderWidth: 5,
      borderColor: '#ADD8E6',
      fontSize: 20,
      fontWeight: "bold",
      color: '#ADD8E6',
      paddingBottom: 3,
      backgroundColor: 'black'
    },
    bottom2:{
      fontFamily : 'Cochin',
      paddingLeft:60,
      marginBottom:10,
      borderRadius:10,
      borderWidth: 5,
      borderColor: '#ADD8E6',
      fontSize: 20,
      fontWeight: "bold",
      color: '#ADD8E6',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    bottom3:{
      fontFamily : 'Cochin',
      paddingHorizontal:3,
      paddingVertical:3,
      //marginHorizontal:20,
      marginBottom:10,
      borderRadius:10,
      borderWidth: 5,
      borderColor: '#ADD8E6',
      fontSize: 20,
      fontWeight: "bold",
      color: '#ADD8E6',
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
      borderColor: '#ADD8E6',
      fontSize: 20,
      fontWeight: "bold",
      color: '#ADD8E6',
      paddingBottom: 3,
      backgroundColor: 'black'
    },
    containerBottoms:{
      //flexDirection: 'row', 
      marginTop:'10%'
    },
    image2: {
      flex:1,
      marginLeft: 300,
      paddingLeft: 290,
      paddingTop: 100,
      marginRight: '50%'
    },
  });