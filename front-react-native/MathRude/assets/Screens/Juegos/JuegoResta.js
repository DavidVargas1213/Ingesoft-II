import React, { useEffect, useState } from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity
      } 
from 'react-native';

const genNumAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10 );
  return numero_aleatorio;
}

  const Index = (props) => {

      const [ buenas , setBuenas ] = useState(0)
      const [ malas , setMalas ] = useState(0)
      const [ operation , setOperation ] = useState({
        result : {
          a : 0,
          b : 0,
          c : 0,
        },
        randomNumbers : []
      })

    const getNumeros =  () => {

      const a = genNumAleatorio()
      const b = genNumAleatorio()
      const c = a - b
      
      let randomNumbers = [ genNumAleatorio(), genNumAleatorio(), c ]

      function shuffle(o){ 
        for( var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x );
        return o;
      };
    
      randomNumbers = [ ...shuffle( randomNumbers ) ]
      setOperation({ result : { a,b,c }, randomNumbers  })

  }
  const  evaluateResult = ( response ) => {

    if( response === operation.result.c ){
      setBuenas(buenas + 1)
      getNumeros()
      return
    }

    console.log('no')
    setMalas( malas + 1 )
    getNumeros()

  }

  useEffect(()=>{
    getNumeros()
  },[])
         
    return(   
      <View style={styles.container}>
        <View style={styles.containerTittle}>
        
                <View style={{flexDirection : 'row', backgroundColor : 'black', width : 100,height : 100, margin : 10, borderRadius : 15, width : '100%' }}>
                    <TouchableOpacity style={{ justifyContent : 'center', alignItems :'center', flex : 1 }}>
                      <Text style={{color : 'white', fontSize : 15}}>BUENAS</Text> 
                      <Text style={{color : 'white', fontSize : 35}}>{buenas}</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent : 'center', alignItems :'center', flex : 1 }}>
                    <Text style={{color : 'white', fontSize : 15}}>MALAS</Text> 
                      <Text style={{color : 'white', fontSize : 35}}>{malas}</Text> 
                    </TouchableOpacity>
                  </View>
          <Text style={styles.textTittle}>
            CUAL ES
            </Text>
            <Text style={styles.textTittle}>
            EL RESULTADO?
            </Text>

        </View>
        <Text style = {styles.text}>
          {operation.result.a} - {operation.result.b} = ?
           
        </Text>
        <View style={{flexDirection : 'row'}}>
         
       {operation.randomNumbers.map((item, key)=>{

         return (<View key={`item_key_${key}`} style={{backgroundColor : 'black', width : 100,height : 100, margin : 10, borderRadius : 15}}>  
                  <TouchableOpacity 
                  style={{justifyContent : 'center', alignItems :'center', flex : 1}}
                  onPress={() => evaluateResult( item ) }>
                    <Text style={{color : 'white', fontSize : 35}}>{item}</Text> 
                  </TouchableOpacity>
                </View> )
       })}
        </View>
      </View>
      );
    }
  
export default Index

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