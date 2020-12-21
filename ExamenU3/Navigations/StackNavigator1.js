import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MERCADO LIBRE" component={HomeScreen}/>
            <Stack.Screen name="Carrito de Articulos"component={CartScreen}
            options={({route})=>({ title: route.params.nombre})}/>
        </Stack.Navigator>
    )
}