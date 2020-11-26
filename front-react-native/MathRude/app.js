import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './assets/Screens/Login';
import Home from './assets/Screens/Home';
import Repaso from './assets/Screens/Repaso';
import RepasoResta from './assets/Screens/Repasos/RepasoResta';
import RepasoSuma from './assets/Screens/Repasos/RepasoSuma';
import RepasoMultiplicacion from './assets/Screens/Repasos/RepasoMultiplicacion';
import RepasoDivision from './assets/Screens/Repasos/RepasoDivision';
import Compito from './assets/Screens/Compito';
import JuegoSuma from './assets/Screens/Juegos/JuegoSuma';
import JuegoResta from './assets/Screens/Juegos/JuegoResta';
import JuegoMultiplicacion from './assets/Screens/Juegos/JuegoMultiplicacion';
import JuegoDivision from './assets/Screens/Juegos/JuegoDivision';
import Aprendo from './assets/Screens/Aprendo';
import AprendoSuma from './assets/Screens/Aprendo/AprendoSuma';
import AprendoResta from './assets/Screens/Aprendo/AprendoResta';
import AprendoMultiplicacion from './assets/Screens/Aprendo/AprendoMultiplicacion';
import AprendoDivision from './assets/Screens/Aprendo/AprendoDivision';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} /> 
      <Stack.Screen name='Repaso' component={Repaso} />
      <Stack.Screen name='RepasoSuma' component={RepasoSuma} />
      <Stack.Screen name='RepasoResta' component={RepasoResta} />
      <Stack.Screen name='RepasoMultiplicacion' component={RepasoMultiplicacion} />
      <Stack.Screen name='RepasoDivision' component={RepasoDivision} />
      <Stack.Screen name='Compito' component={Compito} />
      <Stack.Screen name='JuegoSuma' component={JuegoSuma} />
      <Stack.Screen name='JuegoResta' component={JuegoResta} />
      <Stack.Screen name='JuegoMultiplicacion' component={JuegoMultiplicacion} />
      <Stack.Screen name='JuegoDivision' component={JuegoDivision} />
      <Stack.Screen name='Aprendo' component={Aprendo} />
      <Stack.Screen name='AprendoSuma' component={AprendoSuma} />
      <Stack.Screen name='AprendoResta' component={AprendoResta} />
      <Stack.Screen name='AprendoMultiplicacion' component={AprendoMultiplicacion} />
      <Stack.Screen name='AprendoDivision' component={AprendoDivision} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}