import React, { useEffect, useState } from 'react';
import Draggable from 'react-native-draggable';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';


const App = ( props ) => {


  const [ itemX , setItemX ]      = useState(0)
  const [ itemY , setItemY ]  = useState(0)
  const [ problem , setProblem ] = useState( null )
  const [ oportunities , setOportunities ] = useState(3)
  const [ correcto , setCorrecto ] = useState(0)
  const [ results , setResults ]  = useState([])
  const [ operations , setOperations ] = useState([])
  const [shouldReverse,setShouldReverse] = useState(false)


  useEffect(()=>{
    
      let a_1_num = Math.floor(Math.random() * 100);
      let b_1_num = Math.floor(Math.random() * 100);


      let a_2_num = Math.floor(Math.random() * 100);
      let b_2_num = Math.floor(Math.random() * 100);

      let a_3_num = Math.floor(Math.random() * 100);
      let b_3_num = Math.floor(Math.random() * 100);
      
    let valores = []
        valores[0] = a_1_num + b_1_num;
        valores[1] = a_2_num + b_2_num;
        valores[2] = a_3_num + b_3_num;

      function shuffle(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    console.log(valores)
    valores = [ ...shuffle(valores) ]
    console.log(valores)


      
      let temp = [
        { 
          x : 75,
          y : 550,
          require : '../../imagenes/Hojas.png',
          result : valores[0],
        },
    
        { 
          x : 0,
          y : 600,
          require : '../../imagenes/Hojas.png',
          result : valores[1],
        },
    
        { 
          x : 200,
          y : 600,
          require : '../../imagenes/Hojas.png',
          result : valores[2],
        }
    
      ]

    setResults(temp)
    setOperations([
          { 
            x : 75,
            y : 100,
            operation : `${a_1_num } + ${b_1_num}`,
            result : a_1_num + b_1_num,
            resolved : false
          },
          { 
            x : 200,
            y : 250,
            operation : `${a_2_num } + ${b_2_num}`,
            result : a_2_num + b_2_num,
            resolved : false
          },
          { 
            x : 200,
            y : 100,
            operation : `${a_3_num } + ${b_3_num}`,
            result : a_3_num + b_3_num,
            resolved : false
          }
      ])

  },[])


  useEffect(()=>{

    if( oportunities === 0 && correcto < 3 ){
      console.log('You are lost')
    }

    if( oportunities === 0 && correcto === 3 ){
      console.log('You Win')
    }

  },[oportunities])


  useEffect(()=>{



    if( problem !== null ){

        console.log( '###########' )
        console.log( 'Evaluando' )
        console.log( problem.item.result )
        console.log( problem.operation.result )
        console.log('###########')
      
      if( problem.operation.result === problem.item.result ) {
          console.log( 'Correcto' )
          setOportunities( oportunities - 1 )
          setCorrecto( correcto + 1 )
      }
      else{
          setOportunities( oportunities - 1 )
          console.log( 'Incorrecto' )
          setCorrecto( correcto - 1 )
      }

    }
  },[ problem ])


  const resetValues = ()=>{
    setOportunities( 3 )
    setCorrecto(0)
    setShouldReverse(true)


    let a_1_num = Math.floor(Math.random() * 100);
    let b_1_num = Math.floor(Math.random() * 100);


    let a_2_num = Math.floor(Math.random() * 100);
    let b_2_num = Math.floor(Math.random() * 100);

    let a_3_num = Math.floor(Math.random() * 100);
    let b_3_num = Math.floor(Math.random() * 100);
    
  let valores = []
      valores[0] = a_1_num + b_1_num;
      valores[1] = a_2_num + b_2_num;
      valores[2] = a_3_num + b_3_num;

    function shuffle(o){ 
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  
  console.log(valores)
  valores = [ ...shuffle(valores) ]
  console.log(valores)


    
    let temp = [
      { 
        x : 75,
        y : 1200,
        require : '../../imagenes/Hojas.png',
        result : valores[0],
      },
  
      { 
        x : 0,
        y : 900,
        require : '../../imagenes/Hojas.png',
        result : valores[1],
      },
  
      { 
        x : 200,
        y : 600,
        require : '../../imagenes/Hojas.png',
        result : valores[2],
      }
  
    ]

  setResults(temp)
  setOperations([
        { 
          x : 75,
          y : 100,
          operation : `${a_1_num } + ${b_1_num}`,
          result : a_1_num + b_1_num,
          resolved : false
        },
        { 
          x : 200,
          y : 250,
          operation : `${a_2_num } + ${b_2_num}`,
          result : a_2_num + b_2_num,
          resolved : false
        },
        { 
          x : 200,
          y : 100,
          operation : `${a_3_num } + ${b_3_num}`,
          result : a_3_num + b_3_num,
          resolved : false
        }
    ])

  }
  return (
    <View style={{ backgroundColor : 'red', flex : 1 }}>
      <View style={{ justifyContent : 'center', height : 50, alignItems : 'center', backgroundColor : 'green' }}>
      
        <Text style={{color : 'yellow', fontSize : 20, fontWeight : 'bold'}}>
          Coloca los resultados en la operacion
        </Text>
        <Text style={{color : 'yellow', fontSize : 20, fontWeight : 'bold'}}>
          {oportunities} Turnos restantes
        </Text>
        
      </View>
      <ImageBackground source={require('../../imagenes/Arbol.jpg')} style={styles.image}>

      {
        operations.map((item, key) => {
        return     <Draggable 
        key={`oi${key}`}
        x={ item.x }
        y={ item.y }
        renderSize={ 56 }
        renderColor='black' 
        renderText={ item.operation } 
        isCircle 
        reversePosition={true}
        onShortPressRelease={()=>alert('touched!!')} /> 
      })
    }




    {
      results.map((item, key) => {
        return  <Draggable 
        key={`_${key}`}
                  onDragRelease={( event, gestureState, bounds ) => {
                                        
                    const left  =   Math.round(parseFloat( bounds.left ))
                    const top   =   Math.round(parseFloat( bounds.top ))
                    
                    setItemX( left )
                    setItemY( top )

                    if( left >= 8 && left <= 28 && top >= 48 && top <= 81  ){
                      console.log('( ( ( ( Item 1 ) ) ) )')
                      setProblem({
                        position : 0,
                        item : item,
                        operation : { ...operations[0] }
                      })
                    }



                    if( left >= 140 && left <= 160 && top >= 26 && top <= 65  ){
                      console.log('( ( ( ( Item 2 ) ) ) )')
                      setProblem({
                        position : 2,
                        item : item,
                        operation : { 
                          ...operations[2]
                        }
                      })
                    }

                    
                    if( left >= 120 && left <= 170 && top >= 149 && top <= 236  ){
                      
                      console.log('( ( ( ( Item 3 ) ) ) )')

                      setProblem({
                        position : 1,
                        item : item,
                        operation : { 
                          ...operations[1]
                        }
                      })
                    }
                    
                    
                  }}

                  x={item.x} 
                  y={item.y}
                  shouldReverse={ shouldReverse }
                  onReverse={()=>{ 
                    setShouldReverse(false); 
                    return { 
                      x:0, y:0
                    }
                }}
                  
                   >
              <ImageBackground source={{
                uri : 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/4617/leaf-clipart-md.png',
                resizeMode: "center",
                justifyContent: "center",
              }} 
              style={{ width : 150, height : 140,  justifyContent : 'center', alignItems : 'center', padding : 30}}>
              <Text style={{ fontSize: 40, fontWeight :'bold', color : 'yellow' }}> { item.result }</Text>
            </ImageBackground>
          </Draggable>
      })
    }


    

      {
        ( oportunities === 0 && correcto === 3 ) && <View style={{
          justifyContent : 'center',
          alignItems : 'center',
          position : 'absolute', 
          bottom : 100, 
          right : 0,
          width : '100%'
        }}>
          <TouchableOpacity 
          onPress={()=>resetValues()}
          style={{width : 200, height : 100, backgroundColor : 'green', borderRadius : 15, justifyContent : 'center'}}>
            <Text style={{textAlign : 'center', color : 'white'}}>Ganaste!</Text>
            <Text style={{textAlign : 'center', color : 'white'}}>Toca para reiniciar</Text>
          </TouchableOpacity>    
        </View>
      }


{
  ( oportunities === 0 && correcto < 3 ) && <View style={{
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute', 
    bottom : 100, 
    right : 0,
    width : '100%'
  }}>
          <TouchableOpacity 
          onPress={()=>resetValues()}
          style={{width : 200, height : 100, backgroundColor : 'red', borderRadius : 15, justifyContent : 'center'}}>
            <Text style={{textAlign : 'center', color : 'white'}}>Perdiste!</Text>
            <Text style={{textAlign : 'center', color : 'white'}}>Toca para reiniciar</Text>
          </TouchableOpacity>    
        </View>
      }



    </ImageBackground>
</View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  image : {
    width : '100%',
    height : '100%'
  }
});

export default App;
