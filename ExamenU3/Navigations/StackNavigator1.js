import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Mercado Libre" component={HomeScreen}
            />

            <Stack.Screen name="Carrito" component={CartScreen}
            options={({route})=>({ title: route.params.nombre})}
            />
        </Stack.Navigator>

    )
}