import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, ImageBackground, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const App = ( props ) => {

  const [ operations , setOperations ] = useState([])

	useEffect( () => {
		create()
	} , [] )

  	const create = () => {
	
		const num_operations = 5
		const ops = []
    
    for( let i= 0; i<=num_operations; i++ ) {

      let a = Math.floor(Math.random() * 10)
      let b = Math.floor(Math.random() * 10)

      let item = {
        operation : `${ a } x ${ b } =`,
		result : a * b,
		response : '',
        resolved : false
      }
      ops.push( item )
    }
    setOperations(ops)
  }
  
  const updateInput = ( text , key ) => {
	const temp = [ ...operations ]
	temp[key].response = text
	setOperations([ ...temp ])
  }

	const setInputStyle = (item) => {

		if ( item.result == item.response && item.response !== '' ){
			return { 
        borderColor:'#590871',
        padding:5,
        width : "90%",
        backgroundColor: 'green',
        borderRadius:10,
        borderWidth: 5,
        fontWeight: "bold",
				}
		}

		if ( item.result !== item.response && item.response == '' ){
			return {
        borderColor:'#590871',
        padding:5,
        width : "90%",
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth: 5,
        fontWeight: "bold",
				}
		}

		if ( item.result !== item.response && item.response !== '' ){
			return {
        borderColor:'#590871',
        padding:5,
        width : "90%",
        backgroundColor: 'red',
        borderRadius:10,
        borderWidth: 5,
        fontWeight: "bold",
				}
		}
	}	
  return (
	<View>
	<ScrollView style={styles.scrollView}>
    <View >
      <View style={styles.containerTittle}>
        <Text style={styles.tittleStyle}>
          Coloca los resultados en la operacion
        </Text>
      </View>
	  <ImageBackground source={require ('../../imagenes/fondojuegomulti.png')} 
	  style={styles.image}>


      {
        operations.map((item, key) => {
			console.log(item)
          return (
		  <View 
		  key={key}
		  style={styles.operationsContent2}>
            <View style={styles.operationsContent}>
			  <Text style={styles.numOperations}>
              { item.operation }
              </Text>
            </View>
            <View style={{width : '50%'}}>
            <TextInput
              key={{key}}
			        value={item.response}
              onChangeText={ (text)=>updateInput(text, key) }
			        placeholder='Escribe el resultado aqui'
              style={setInputStyle(item)} 
              keyboardType={'numeric'}
            />
            </View>
		  </View>
		  )
        })
      }
    </ImageBackground>
	</View>


	  <TouchableOpacity 
	  onPress={()=>create()}
	  style={styles.recharge}>
	  	<Image
		  style={styles.image2}
		  	source={require('../../imagenes/refresh.gif')}
        />
	  </TouchableOpacity>
        </ScrollView>
	</View>
  )
}
const styles = StyleSheet.create({
  container: {
	paddingTop: 50,
	paddingHorizontal : 10
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  image : {
  width : '100%',
	height : '100%',

  },
  image2 : {
    width : 30,
    height : 30
  },
  recharge : {
    backgroundColor : '#212121',
		borderRadius : 5,
		alignItems : 'center',
	  justifyContent : 'center',
		height : 50, 
		width : 50, 
		position : 'absolute', 
		right : 10, 
		top : 100 
  },
  operationsContent : {
    fontWeight : 'bold',
    fontFamily : 'Cochin',
    width : '30%', 
    //backgroundColor : 'Light purple', 
    height : 40, 
    //justifyContent :'center', 
    borderTopLeftRadius : 5 
  },
  operationsContent2 : {
    flexDirection : 'row',
    height : 100, 
    width : '100%', 

    //justifyContent :'center', 
    alignItems : 'center' 
  },
  numOperations : {
    fontFamily : 'Cochin',
    fontSize: 35, 
    fontWeight : 'bold', 
		color : 'black'
  },
  tittleStyle : {
    color : 'yellow', 
    fontSize : 20, 
    fontWeight : 'bold',
    fontFamily : 'Cochin'
  },
  containerTittle : {
    justifyContent : 'center', 
    height : 50, 
    alignItems : 'center', 
    backgroundColor : '#590871'
  },

});

export default App;