import React, {Component} from 'react';
import {ImageBackground, 
        StyleSheet,
        Text,
        View, 
        TouchableOpacity,
      } 
from 'react-native';



function genNumAleatorio() {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 99 );
  return numero_aleatorio;
}

    export default class Login extends React.Component {
      constructor(props){
        super(props);
        
        var a=genNumAleatorio();
        var b=genNumAleatorio();
        while(a<b){
          a = genNumAleatorio();
        }
        const c=genNumAleatorio();
        const d=genNumAleatorio();
        const Resultado= a-b;
        this.state={
          visibility: false,
          numeroAleatorio1 : a,
          numeroAleatorio2 : b,
          numeroAleatorio3 : c,
          numeroAleatorio4 : d,
          Numeros : [Resultado, c, d],
         
        }
        this.state.Numeros.sort(function (a,b ){return a-b});
      }
     
  render(){
    const { Numeros} = this.state;
    return(   
      <View style={styles.container}>
        <View style={styles.containerTittle}>
        
          <Text style={styles.textTittle}>
            CUAL ES
            </Text>
            <Text style={styles.textTittle}>
            EL RESULTADO?
            </Text>
          
        </View>
        <Text style = {styles.text}>
          {this.state.numeroAleatorio1} - {this.state.numeroAleatorio2} = ?
           
        </Text>
        <View style={styles.containerBottoms}>
         
          <View>
           <TouchableOpacity onPress={ c => {
              if(this.state.numeroAleatorio1-this.state.numeroAleatorio2==Numeros[0]){
                
               console.log ("OKKKKKK"); 
              }else{
                console.log ("NO")
            }
          
          }
              }>
             <Text style = {styles.bottom1}>
                 { 
                 Numeros[0]
                 }          
               </Text> 
        </TouchableOpacity>
          </View> 
        <View>
            <TouchableOpacity onPress={c => {
              if(this.state.numeroAleatorio1-this.state.numeroAleatorio2==Numeros[1]){
                //<ImageBackground source={tick} style={styles.containerTittle}></ImageBackground>
               console.log ("OKKKKKK"); 
              }else{
                console.log ("NO")
            }
          }}>
              <Text style = {styles.bottom2}>
                 {
                 Numeros[1]
                 }
                </Text> 
            </TouchableOpacity>
        </View> 
        <View>
            <TouchableOpacity onPress={c => {
              if(this.state.numeroAleatorio1-this.state.numeroAleatorio2==Numeros[2]){
                
               console.log ("OKKKKKK"); 
              }else{
                console.log ("NO")
            }
          }}>
              <Text style = {styles.bottom3}>
                {
                Numeros[2]
                }
                </Text> 
            </TouchableOpacity>
        </View> 
        </View>
      </View>
      );
    }
  }
  
  //<ImageBackground source={down} style={styles.image2}></ImageBackground>
const styles = StyleSheet.create({
  
  containerTick: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerTittle: {
    flex:0.5,
    
    alignItems: 'center',
    alignContent: 'center'
    
  },
    container: {
      flex:1,
      backgroundColor:'green',
      borderWidth: 5,
      borderColor: 'brown',
    
      alignItems: 'center'
    },
    text:{
      fontFamily : 'Cochin',
      fontSize: 60,
      fontWeight: "bold",
      color: 'white',
      paddingBottom: 10
    },
    textTittle:{
      fontFamily : 'Roboto',
      fontSize: 40,
      fontWeight: "bold",
      color: 'white',
      paddingBottom: 10,
      alignItems:'center'
    },
    bottom1:{
      fontFamily : 'Cochin',
      paddingHorizontal:15,
      paddingVertical:15,
      borderRadius:10,
      borderWidth: 5,
      borderColor: 'yellow',
      fontSize: 50,
      fontWeight: "bold",
      color: 'white',
      paddingBottom: 10
    },
    bottom2:{
      fontFamily : 'Cochin',
      paddingHorizontal:15,
      paddingVertical:15,
      marginLeft:40,
      marginRight: 40,
      borderRadius:10,
      borderWidth: 5,
      borderColor: 'yellow',
      fontSize: 50,
      fontWeight: "bold",
      color: 'white',
      paddingBottom: 10
    },
    bottom3:{
      fontFamily : 'Cochin',
      paddingHorizontal:15,
      paddingVertical:15,
      borderRadius:10,
      borderWidth: 5,
      borderColor: 'yellow',
      fontSize: 50,
      fontWeight: "bold",
      color: 'white',
      paddingBottom: 10
    },
    containerBottoms:{
      flexDirection: 'row', 
      marginTop:'10%'
    },
    image2: {
      flex:1,
      paddingLeft: 170,
      paddingTop: 100,
      marginRight: '50%'
    },
  });

