import React,{ Component }  from 'react';
import {ImageBackground, 
  StyleSheet,
  View, 
  ScrollView} from 'react-native';
    
export default class RepasoResta extends React.Component{
  
    render(){
        return(
          <ScrollView>
             <View style={styles.container}>
                <ImageBackground source={require('../../imagenes/titulorestar.png')} style={{width: 350, height: 210}}></ImageBackground>
             <View style={styles.container}>
                <ImageBackground source={require('../../imagenes/restasrepaso.png')} style={{width: 350, height: 500}}></ImageBackground>
             </View>
        </View>
        </ScrollView>
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