import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';



const genNumAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10 );
  return numero_aleatorio;
}

  const Index = (props) => {
      const [ turnos , setTurnos ] = useState(10)
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
      
      const temp_a = genNumAleatorio()
      const temp_b = genNumAleatorio()
      
      const a = (temp_a === 0 ) ? 1 : temp_a
      const b = (temp_b === 0 ) ? 1 : temp_b
      const c = a / b
       
      
      let randomNumbers = [ genNumAleatorio(), genNumAleatorio(), c.toFixed() ]

      function shuffle(o){ 
        for( var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x );
        return o;
      };
    
      randomNumbers = [ ...shuffle( randomNumbers ) ]
      setOperation({ result : { a,b, c : c.toFixed() }, randomNumbers  })

  }


  const  evaluateResult = ( response ) => {

    if( response === operation.result.c ){
      console.log(response)
      console.log( operation.result.c )
      
      setBuenas(buenas + 1)
      getNumeros()
      setTurnos(turnos - 1)

      return
    }

    setMalas( malas + 1 )
    getNumeros()
    setTurnos(turnos - 1)

  }

  const resetValues = () => {
    getNumeros()
    setMalas(0)
    setBuenas(0)
    setTurnos(10)
  }


  useEffect(()=>{
    getNumeros()
  },[])


  if ( turnos === 0 ){

    return (
      <View style={{ flex : 1, backgroundColor : 'green', paddingHorizontal : 10}}>
        <ImageBackground source={{uri : 'https://cdn.wallpapersafari.com/51/15/IJU0gj.jpg'}} style={{...styles.image, justifyContent : 'center', alignItems : 'center'}}>


                 <Text style={{fontSize : 40 , textAlign : 'center'}}>Tus resultados</Text>
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

            <TouchableOpacity 
            onPress={()=>resetValues()}
            style={{width : 200, backgroundColor :'blue', height : 100, borderRadius : 15, justifyContent : 'center', alignItems : 'center'}}>
              <Text style={{color : 'white', fontSize : 40}}>Reiniciar</Text>
            </TouchableOpacity>



        </ImageBackground>
      </View>
    )


  }


         
    return(   
      <View style={styles.container}>
        <View style={styles.containerTittle}>

                  <Text style={styles.textTittle}>CUAL ES</Text>
                  <Text style={styles.textTittle}>EL RESULTADO?</Text>
                  
                  <Text style={styles.textTittle}>Turnos</Text>
                  <View style={{width : 50, height : 50, backgroundColor : 'yellow', justifyContent : 'center', alignItems : 'center', borderRadius :15}}>
                    <Text style={{color: 'black', fontSize : 22, fontWeight : 'bold'}}>
                      { turnos }
                    </Text>
                  </View>


        </View>
        <Text style = {styles.text}>
          {operation.result.a} / {operation.result.b} = ? 
           
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
  image : {
    width : '100%',
    height : '100%'
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
      fontSize: 40,
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