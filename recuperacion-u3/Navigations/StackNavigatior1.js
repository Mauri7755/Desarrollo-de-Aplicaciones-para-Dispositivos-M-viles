import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Formulario from '../screens/Formulario';
import Listado from '../screens/Lista';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Listado"
                component={Listado}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Formulario"
                component={Formulario}
            />
        </Stack.Navigator>
    )
}
